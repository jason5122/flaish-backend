import Demo from "./Demo";
import FeaturedCards from "../card/featured/FeaturedCards";
import { AuthenticatedUserLayout } from "@/components";

export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default async function Dashboard() {
  return (
    <AuthenticatedUserLayout>
      <div className="my-10 flex flex-col gap-y-10 lg:px-20 md:px-10 p-4">
        <Demo />
        <FeaturedCards />
      </div>
    </AuthenticatedUserLayout>
  );
}
