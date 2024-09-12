"use client";
import React from "react";
import { useFlashCardContext } from "@/context/FlashCardContext"; // Use context
import Image from "next/image";
import FlashCard from "./FlashCard";

const FlashCardList = () => {
  const {
    handleNextCard,
    handlePreviousCard,
    currentCard,
    showAnswer,
    handleToggleAnswer,
    currentIndex,
    totalCards,
  } = useFlashCardContext(); // Get everything from context

  return (
    <div className="flashcard-list-container w-full h-full">
      <div className="min-h-full flex items-center justify-between">
        <div className="p-4 w-full flex items-center justify-center">
          <div className="lg:w-[60%] w-full h-full flex items-center justify-between space-x-16">
            <Image
              src="/assets/images/caret_left.svg"
              width={50}
              height={50}
              alt="left caret"
              className="w-[5%] cursor-pointer"
              onClick={handlePreviousCard}
            />
            <div className="relative w-full flex flex-col space-y-10">
              <FlashCard
                question={currentCard.question}
                answer={currentCard.answer}
                showAnswer={showAnswer}
                toggleAnswer={handleToggleAnswer}
                currentIndex={currentIndex}
              />
            </div>
            <Image
              src="/assets/images/caret_right.svg"
              width={50}
              height={50}
              alt="right caret"
              className="w-[5%] cursor-pointer"
              onClick={handleNextCard}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCardList;
