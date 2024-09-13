"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { ThemeSwitcher } from "../theme";
import { useRouter } from "next/navigation";

interface Link {
  link: string;
  icon: string;
  label: string;
}
const links: Link[] = [
  { link: "/", icon: "home.svg", label: "Home" },
  { link: "/notes", icon: "notes.svg", label: "Notes" },
  { link: "/add-notes", icon: "circle_plus.svg", label: "Add notes" },
  { link: "/bookmark", icon: "bookmark.svg", label: "Bookmark" },
  { link: "/profile", icon: "user_avatar.svg", label: "Profile" },
];
export default function AuthenticatedUserHeader() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-full h-full flex items-center justify-between py-4 px-8 border-secondary border-b-[1px]">
      <div className="relative w-[48%] flex items-center space-x-10">
        <button
          type="button"
          className="-m-2.5 flex items-center justify-center  h-[40px] w-[40px] rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <span>X</span>
          )}
        </button>
        <Image
          src="/assets/images/flaish_icon.svg"
          title="Logo"
          alt="Logo"
          width={100}
          height={100}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>
      <div className="w-[48%] flex items-center justify-end space-x-10">
        <ThemeSwitcher />
        <FaRegUserCircle className="text-2xl " />
      </div>
      {isOpen && (
        <div className="absolute inset-0 top-[70px] bg-transparent flex flex-col items-start w-fit h-[50%] py-10 px-16 space-y-10 pl-8 rounded-lg z-20">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="flex items-center space-x-4"
            >
              <Image
                src={"/assets/images/" + link.icon}
                title="Logo"
                alt="Logo"
                width={20}
                height={20}
              />
              {/* <span className="text-sm">{link.label}</span> */}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
