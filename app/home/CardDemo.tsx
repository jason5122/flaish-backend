"use client";

import { CustomButton } from "@/components";
import useTheme from "@/hooks/useTheme";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlay } from "react-icons/fa";

export default function CardDemo() {
  const router = useRouter();
  const {getColor} = useTheme();
  return (
    <div className="lg:w-[90%] w-full max-w-full lg:h-[400px] h-auto flex items-center justify-between gap-4 flex-wrap">
      <div className="lg:w-[30%] md:w-[48%] w-full h-full flex items-center justify-center sm:justify-start">
        <div className="md:w-[80%] w-full sm:w-[50%]">
          <h2 className="lg:w-[70%] md:w-[80%] text-[40px] font-bold mb-2">Learn, quiz, and present AI concepts</h2>
          <CustomButton
            onClick={() => router.push("/card")}
            title="login button"
            text="Start now"
            width="70%"
            height="45px"
            className={"rounded-[35px]"}
            backgroundColor={getColor("tertiary")}
          />
        </div>
      </div>
      <div className="bg-accent lg:w-[65%]  md:w-[48%] w-full min-h-[400px] h-full rounded-[35px] flex items-center justify-center">
        <FaPlay className="text-tertiary text-3xl"/>
      </div>
    </div>
  );
}
