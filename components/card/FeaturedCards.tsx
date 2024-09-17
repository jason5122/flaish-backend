"use client";

import { flashcards } from "@/app/api/card/FlashCard";
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
          <CustomButton text="Add Card" title="Add Featured Card" className="rounded-[7px]" width="100%" />
        </div>
      </div>
      <h2 className="font-regular text-[25px]">Featured Set</h2>
      <div className="w-full flex flex-wrap gap-4 items-center justify-start">
        {flashcards.slice(0, 8)
          .map((card, index) => (
            <div
              key={index}
              onClick={() => router.push("/category")}
              className="offer-item w-[250px] h-[120px] bg-white border-[1px] border-darkbg rounded-[40px] flex items-center justify-center gap-x-4 px-4 cursor-pointer"
            >{index === 0 ? <span className="text-darkbg text-center w-full">AI Concepts</span> : <span className="text-darkbg text-center w-full">{card.category}</span>}</div>
          ))}
      </div>
    </div>
  );
};

export default FeaturedCards;
