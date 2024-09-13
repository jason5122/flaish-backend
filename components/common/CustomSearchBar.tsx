"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, ChangeEvent } from "react";

interface SearchBarProps<T> {
  searchItems?: T[];
  search?: string;
  propToSearch?: keyof T;
  setSearch?: Dispatch<SetStateAction<string>>;
  filterFunction?: (item: T, search: string, prop: keyof T) => boolean;
}

export default function CustomSearchBar<T>({
  searchItems = [],
  search,
  setSearch,
  propToSearch,
  filterFunction,
}: SearchBarProps<T>) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (setSearch) {
      setSearch(event.target.value);
    }
  };

  const handleSearch = () => {
    if (!searchItems.length || !propToSearch || !search || !filterFunction) {
      return [];
    }
    return searchItems.filter((item) =>
      filterFunction(item, search, propToSearch)
    );
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="lg:w-[60%] md:w-[80%] w-full border-tertiary border-[1px] border-opacity-50 flex rounded-[35px] p-1">
        <Image
          src="/assets/images/search.svg"
          title="Search Icon"
          alt="Search Icon"
          className="font-bold mr-4"
          width={24}
          height={24}
        />
        <input
          value={search}
          onChange={handleInputChange}
          placeholder="Search..."
          className="w-full bg-transparent text-[14px] outline-none border-none"
        />
      </div>
    </div>
  );
}