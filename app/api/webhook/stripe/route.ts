import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import connectMongo from "@/libs/mongoose";
import configFile from "@/config";
import User from "@/models/User";
import { findCheckoutSession } from "@/libs/stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16",
  typescript: true,
});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// This is where we receive Stripe webhook events
export async function POST(req: NextRequest) {
  await connectMongo();

  const body = await req.text();
  const signature = headers().get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(`Webhook signature verification failed. ${err.message}`);
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Unknown error occurred" },
      { status: 400 }
    );
  }

  const eventType = event.type;

  try {
    switch (eventType) {
      case "checkout.session.completed": {
        const stripeObject = event.data.object as Stripe.Checkout.Session;
        const session = await findCheckoutSession(stripeObject.id);

        const customerId = session?.customer;
        const priceId = session?.line_items?.data[0]?.price?.id;

        const userId = stripeObject.client_reference_id;
        const plan = configFile.stripe.plans.find((p) => p.priceId === priceId);

        if (!plan) break;

        const customer = (await stripe.customers.retrieve(
          customerId as string
        )) as Stripe.Customer;

        let user;

        if (userId) {
          user = await User.findById(userId);
        } else if (customer.email) {
          user = await User.findOne({ email: customer.email });

          if (!user) {
            user = new User({
              email: customer.email,
              name: customer.name,
            });

            await user.save();
          }
        } else {
          console.error("No user found");
          throw new Error("No user found");
        }

        user.priceId = priceId;
        user.customerId = customerId;
        user.hasAccess = true;
        await user.save();

        break;
      }

      case "checkout.session.expired": {
        break;
      }

      case "customer.subscription.updated": {
        break;
      }

      case "customer.subscription.deleted": {
        const stripeObject = event.data.object as Stripe.Subscription;

        const subscription = await stripe.subscriptions.retrieve(
          stripeObject.id
        );
        const user = await User.findOne({ customerId: subscription.customer });

        if (user) {
          user.hasAccess = false;
          await user.save();
        }

        break;
      }

      case "invoice.paid": {
        const stripeObject = event.data.object as Stripe.Invoice;

        const priceId = stripeObject.lines?.data[0]?.price?.id;
        const customerId = stripeObject.customer;

        if (!priceId || !customerId) {
          console.error("Price ID or Customer ID is missing");
          return NextResponse.json(
            { error: "Price ID or Customer ID is missing" },
            { status: 400 }
          );
        }

        const user = await User.findOne({ customerId });

        if (user?.priceId === priceId) {
          user.hasAccess = true;
          await user.save();
        }

        break;
      }

      case "invoice.payment_failed": {
        break;
      }

      default:
      // Handle other event types
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error("Stripe error:", e.message);
    } else {
      console.error("Unknown error occurred in Stripe webhook");
    }
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({});
}
