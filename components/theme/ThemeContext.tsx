"use client";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const Theme = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});
type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}
const getInitialTheme = (): ThemeType => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme") as ThemeType | null;
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
  }
  return "light"; 
};
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(getInitialTheme);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Theme.Provider value={{ theme, toggleTheme }}>{children}</Theme.Provider>
  );
};

export const useTheme = () => useContext(Theme);
