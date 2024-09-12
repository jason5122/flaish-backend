"use client";
import { useTheme as useNextTheme } from "next-themes";
import { Colors } from "@/constants/Colors";
import { ThemeColors } from "@/types/theme";

type Theme = "light" | "dark";

export interface UseThemeReturn {
  theme: Theme;
  getColor: (colorName: keyof ThemeColors) => string;
}

export default function useTheme(): UseThemeReturn {
  const { theme: nextTheme } = useNextTheme();
  const theme = (nextTheme as Theme) || "light";

  const getColor = (colorName: keyof ThemeColors): string => {
    return Colors[theme]?.[colorName] || Colors.light[colorName];
  };

  return { theme, getColor };
}
