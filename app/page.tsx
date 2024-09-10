import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
