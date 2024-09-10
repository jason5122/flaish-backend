import Layout from "@/components/Layout";
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
