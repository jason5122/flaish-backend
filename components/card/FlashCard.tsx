"use client";
import React from "react";
import Image from "next/image";
import { flashcards } from "@/app/api/card/FlashCard";
import useTheme from "@/hooks/useTheme";

interface FlashCardProps {
  question: string;
  answer: string;
  showAnswer: boolean;
  toggleAnswer: () => void;
  currentIndex: number;
}

export default function FlashCard({
  question,
  answer,
  showAnswer,
  toggleAnswer,
  currentIndex,
}: FlashCardProps) {
  const { theme } = useTheme();
  // Calculate progress percentage
  const progressPercentage = Math.floor(((currentIndex + 1) / flashcards.length) * 100);

  return (
    <div className="container">
      <div className="relative w-full flex flex-col space-y-10">
        <div className="relative w-full">
          <div className="absolute left-[50px] top-[-130px] flex justify-between items-end">
            <Image
              src="/assets/images/bot_finger.svg"
              alt="Robot"
              title="Robot Reading a Card"
              className="z-30"
              width={50}
              height={50}
            />
            <Image
              src="/assets/images/bot_head.svg"
              alt="Robot"
              title="Robot Reading a Card"
              width={150}
              height={150}
            />
            <Image
              src="/assets/images/bot_finger.svg"
              alt="Robot"
              title="Robot Reading a Card"
              className="z-30"
              width={50}
              height={50}
            />
          </div>

          <div
            className={`card ${theme === "light" ? "border-darkbg" : ""} ${showAnswer ? "flipped" : ""} bg-white border-[1px] cursor-pointer z-[10]`}
            onClick={toggleAnswer}
          >
            <div className="card-inner relative min-h-[324px] w-full flex items-center justify-center px-4">
              <div className="card-front absolute w-full h-full flex items-center justify-center">
                <span className="text-darkbg">{question}</span>
              </div>
              <div className="card-back absolute w-full h-full flex items-center justify-center">
                <span className="text-darkbg">{answer}</span>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-0 transform translate-x-24 translate-y-6 w-[20%]">
            <Image
              src="/assets/images/bot.svg"
              alt="Robot"
              title="Robot Reading a Card"
              width={300}
              height={324}
            />
          </div>

          <div>
            <Image
              src="/assets/images/bot_hand.svg"
              alt="Robot"
              title="Robot Reading a Card"
              className="absolute bottom-0 right-[-75px] top-[90px] -rotate-[10deg] z-[20]"
              width={150}
              height={150}
            />
          </div>

        </div>

        {/* Progress Bar */}
        <div className="card-progress relative w-full h-4 border-2 rounded-lg">
          <div
            className="absolute h-full bg-tertiary rounded-lg"
            style={{
              width: `${progressPercentage}%`,
            }}
          ></div>
          <div className="absolute h-full w-full flex items-center justify-center text-xs font-bold">
            {progressPercentage}% {/* Display accurate progress */}
          </div>
        </div>
      </div>
    </div>
  );
};

