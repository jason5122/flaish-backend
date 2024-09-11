"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { PiMoonFill } from "react-icons/pi";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="relative bg-[#44ADCD]/50 inline-flex h-6 w-14 items-center rounded-full transition-colors focus:outline-none border-2"
      >
        <span
          className={`${
            theme === "dark" ? "translate-x-[.5]" : "translate-x-8"
          } inline-block h-5 w-5 transform rounded-full bg-white transition-transform`}
        />
        {theme === "dark" && (
          <span className="inline-block h-4 w-4  transform transition-transform translate-x-2">
            <PiMoonFill className="text-sm text-white" />
          </span>
        )}
      </Switch>
    </div>
  );
};

export default ThemeSwitcher;
