import React from "react";
import AuthenticatedUserLayout from "@/components/layout/AuthenticatedUserLayout";
import FlashCardList from "./flashcard/FlashCardList";
import Home from "../home/page";

const Card = () => {
  return (
    <AuthenticatedUserLayout>
      <div className="h-full w-full flex items-center justify-center">
        <Home />
      </div>
    </AuthenticatedUserLayout>
  );
};

export default Card;
