// components/theme/ButtonTheme.tsx
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";

export default function ButtonTheme() {
  const { theme, toggleTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Уникаємо SSR

  return (
    <button
      onClick={toggleTheme}
      className={`px-6 py-2 rounded transition
  ${
    theme === "dark"
      ? "bg-[rgb(40,6,6)] text-white hover:bg-[rgb(50,6,6)]"
      : "bg-[rgb(247,230,230)] text-black hover:bg-red-100"
  }`}
    >
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}
