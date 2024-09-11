import { Layout } from "@/components";
import Home from "./home/Home";

export default function Page() {
  return (
    <div className="w-full h-full">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}
