"use client";

import React, { useState } from "react";
import { categories } from "../api/card/Category";
import { IoSearchOutline } from "react-icons/io5";

const FeaturedCards = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="lg:w-[60%] w-[80%] flex items-center justify-start space-x-2 pl-2 border-[1px] border-[#4AC0E0] my-4 rounded-2xl py-[7px]">
        <IoSearchOutline />
        <input
          type="text"
          placeholder="Search"
          className="text-md w-full bg-transparent text-sm outline-none border-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center px-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className="min-w-[30%] lg:w-[30%] px-2 sm:w-[50%] w-full h-[50px] bg-[#D4DFEE] rounded-md flex items-center justify-center hover:bg-blue-200"
          >
            <span className="text-lightText">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCards;
