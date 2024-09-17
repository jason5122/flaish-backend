import React from "react";
import Home from "../home/page";
import { AuthenticatedUserLayout, FlashCardList } from "@/components";

const Card = () => {
  return (
    <AuthenticatedUserLayout>
      <div className="h-full w-full flex items-center justify-center">
        <FlashCardList />
      </div>
    </AuthenticatedUserLayout>
  );
};

export default Card;
