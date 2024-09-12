import { Layout } from "@/components";
import Home from "./home/page";

export default function Page() {
  return (
    <div className="w-full h-full">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}
