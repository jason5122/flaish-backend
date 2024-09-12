import React from "react";
import Image from "next/image";
import { flashcards } from "@/app/api/card/FlashCard";

interface FlashCardProps {
  question: string;
  answer: string;
  showAnswer: boolean;
  toggleAnswer: () => void;
  currentIndex: number;
}

const FlashCard: React.FC<FlashCardProps> = ({
  question,
  answer,
  showAnswer,
  toggleAnswer,
  currentIndex,
}) => {
  return (
    <div className="container">
      <div className="relative w-full flex flex-col space-y-10">
        <div
          className="card bg-white border-darkbg border-[1px] cursor-pointer"
          onClick={toggleAnswer} // Toggle question/answer
        >
          <div className="min-h-[324px] min-w-[70%] flex items-center justify-center z-16 px-4">
            <span className="text-lightText">
              {showAnswer ? answer : question}
            </span>
          </div>
          <div className="absolute right-0 transform translate-x-20 translate-y-6 z-0 w-[20%]">
            <Image
              src="/assets/images/bot.svg"
              alt="Robot"
              title="Robot Reading a Card"
              width={300}
              height={324}
            />
            <Image
              src="/assets/images/bot_hand.svg"
              alt="Robot"
              title="Robot Reading a Card"
              className="absolute bottom-0 right-0 rotate-0"
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="card-progress relative w-full h-4 border-2 rounded-lg">
          <div
            className="absolute h-full bg-tertiary rounded-lg"
            style={{
              width: `${((currentIndex + 1) / flashcards.length) * 100}%`,
            }}
          ></div>
          <div className="absolute h-full w-full flex items-center justify-center text-xs font-bold">
            {Math.floor(((currentIndex + 1)) * 100)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
