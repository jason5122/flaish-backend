"use client";

import { createContext, useContext, useState } from "react";
import { flashcards } from "@/app/api/card/FlashCard";

// Create FlashCardContext
interface FlashCardContextProps {
  currentIndex: number;
  showAnswer: boolean;
  handleNextCard: () => void;
  handlePreviousCard: () => void;
  handleToggleAnswer: () => void;
  setCardByIndex: (index: number) => void;
  currentCard: { question: string; answer: string };
  totalCards: number;
}

const FlashCardContext = createContext<FlashCardContextProps | undefined>(
  undefined
);

export const useFlashCardContext = () => {
  const context = useContext(FlashCardContext);
  if (!context) {
    throw new Error("useFlashCardContext must be used within a FlashCardProvider");
  }
  return context;
};

// Provider Component
export const FlashCardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setShowAnswer(false);
  };

  const handlePreviousCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length
    );
    setShowAnswer(false);
  };

  const handleToggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };
  
  const setCardByIndex = (index: number) => {
    setCurrentIndex(index);
    setShowAnswer(false); // Reset the answer view
  };

  const value: FlashCardContextProps = {
    currentIndex,
    showAnswer,
    handleNextCard,
    handlePreviousCard,
    handleToggleAnswer,
    currentCard: flashcards[currentIndex],
    totalCards: flashcards.length,
    setCardByIndex,
  };

  return (
    <FlashCardContext.Provider value={value}>
      {children}
    </FlashCardContext.Provider>
  );
};
