import React from "react";
import CardDemo from "./CardDemo";
import Offers from "./Offers";
import { Seperator } from "@/components";
import Services from "./Services";

const Home = () => {
  return (
    <div className="w-full py-10 px-4 flex flex-col items-center gap-y-10">
      <CardDemo />
      <Seperator />
      <Offers />
      <Seperator top={false} />
      <Services />
      <Services reverse />
    </div>
  );
};

export default Home;
