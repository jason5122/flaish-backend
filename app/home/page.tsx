import React from "react";
import { Hero, Offers, Seperator, Services } from "@/components";

const Home = () => {
  return (
    <div className="w-full py-10 px-4 flex flex-col items-center gap-y-10">
      <Hero showStartNowComponent={true} />
      <Seperator />
      <Offers />
      <Seperator top={false} />
      <Services />
      <Services reverse />
    </div>
  );
};

export default Home;
