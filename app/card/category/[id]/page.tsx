"use client";

import React from "react";
import { useFlashCardContext } from "@/context/FlashCardContext"; // Import the context
import Image from "next/image";
import AuthenticatedUserLayout from "@/components/layout/AuthenticatedUserLayout";
import FlashCard from "../../flashcard/FlashCard";

const CategoryPage = () => {
  const {
    handleNextCard,
    handlePreviousCard,
    currentCard,
    showAnswer,
    handleToggleAnswer,
    currentIndex,
    totalCards,
  } = useFlashCardContext(); // Use context to get state and functions

  if (!currentCard) {
    return <div>Category not found</div>;
  }

  return (
    <AuthenticatedUserLayout>
      <div className="min-h-full flex items-center justify-between">
        <div className="p-4 w-full flex items-center justify-center">
          <div className="lg:w-[60%] w-full h-full flex items-center justify-between space-x-16">
            {/* Previous button */}
            <Image
              src="/assets/images/caret_left.svg"
              width={50}
              height={50}
              alt="left caret"
              className="w-[5%] cursor-pointer"
              onClick={handlePreviousCard} // Navigate to previous card
            />
            <FlashCard
              currentIndex={currentIndex}
              question={currentCard.question}
              answer={currentCard.answer}
              toggleAnswer={handleToggleAnswer}
              showAnswer={showAnswer}
            />
            {/* Next button */}
            <Image
              src="/assets/images/caret_right.svg"
              width={50}
              height={50}
              alt="right caret"
              className="w-[5%] cursor-pointer"
              onClick={handleNextCard} // Navigate to next card
            />
          </div>
        </div>
      </div>
    </AuthenticatedUserLayout>
  );
};

export default CategoryPage;
