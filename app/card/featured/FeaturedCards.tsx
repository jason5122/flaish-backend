"use client";

import { CustomButton, CustomSearchBar } from "@/components";
import { useRouter } from "next/navigation";
import React from "react";

const FeaturedCards = () => {
   const router = useRouter();
  return (
    <div className="flex flex-col gap-y-8 items-start justify-center">
      <div className="w-full flex flex-wrap items-center justify-center gap-4">
        <div className="lg:w-[80%] w-full">
          <CustomSearchBar />
        </div>
        <div className="lg:w-[15%] min-w-[15%] md:w-[50%] w-full">
          <CustomButton text="Add Card" title="Add Featured Card" className="rounded-[7px]"  width="100%"/>
        </div>
      </div>
      <h2 className="font-regular text-[25px]">Featured Cards</h2>
      <div className="w-full flex flex-wrap gap-4 items-center justify-start">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              onClick={() => router.push("/card/categories")}
              className="offer-item w-[320px] h-[150px] bg-white border-[1px] border-darkbg rounded-[40px] flex items-center justify-center gap-x-4 px-4 cursor-pointer"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default FeaturedCards;
