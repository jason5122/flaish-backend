import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import config from "@/config";
import connectMongo from "./mongo";
import type { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

const mongoAdapter = connectMongo ? MongoDBAdapter(connectMongo) : undefined;

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET as string, // Ensure this is defined
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string, // Assert that GOOGLE_ID is a string
      clientSecret: process.env.GOOGLE_SECRET as string, // Assert that GOOGLE_SECRET is a string
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile.given_name ? profile.given_name : profile.name,
          email: profile.email,
          image: profile.picture,
          createdAt: new Date(),
        };
      },
    }),
    ...(connectMongo
      ? [
          EmailProvider({
            server: process.env.EMAIL_SERVER as string, // Assert that EMAIL_SERVER is a string
            from: config.mailgun.fromNoReply,
          }),
        ]
      : []),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  theme: {
    brandColor: config.colors.main,
    logo: `https://${config.domainName}/logoAndName.png`,
  },
};

export default NextAuth(authOptions);
