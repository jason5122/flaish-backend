"use client";

import { useState, useMemo } from "react";
import { flashcards } from "@/app/api/card/FlashCard";
import { AuthenticatedUserLayout, CustomSearchBar } from "@/components";
import { FlashCard } from "@/types/flashcard";
import { useRouter } from "next/navigation";
import { useFlashCardContext } from "@/context/FlashCardContext";

// Update the filterByCategory function to work with FlashCard type
const filterByCategory = (item: FlashCard, search: string, prop: keyof FlashCard) => {
  if (prop === 'category') {
    return item[prop].toLowerCase().includes(search.toLowerCase());
  }
  return false;
};

export default function CategoryList() {
  const router = useRouter();
  const { setCardByIndex } = useFlashCardContext();
  const [search, setSearch] = useState<string>("");

  // Get unique categories
  const uniqueCategories = useMemo(() => {
    return Array.from(new Set(flashcards.map(card => card.category)));
  }, []);

  // Filter categories based on search
  const filteredCategories = useMemo(() => {
    if (!search) return uniqueCategories;
    return uniqueCategories.filter(category =>
      filterByCategory({ category } as FlashCard, search, 'category')
    );
  }, [uniqueCategories, search]);

  return (
    <AuthenticatedUserLayout>
      <div className="w-full h-full flex flex-col gap-y-10 items-center justify-center px-8 pt-8 pb-2 sm:px-4">
        <div className="lg:w-[50%] md:w-[75%] w-full flex items-center justify-center">
          <CustomSearchBar
            searchItems={flashcards}
            search={search}
            setSearch={setSearch}
            propToSearch="category"
            filterFunction={filterByCategory}
          />
        </div>
        <div className="w-full flex items-start justify-center flex-wrap gap-4 overflow-scroll">
          {filteredCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => router.push(`/category/${encodeURIComponent(category)}`)}
              className="w-[250px] h-[70px] bg-accent rounded-[17px] flex items-center justify-center cursor-pointer text-darkbg text-[16px]"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </AuthenticatedUserLayout>
  );
}