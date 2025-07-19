// "use client";
// import { useTheme } from "../theme/ThemeContext";

export default function Footer() {
//   const { theme } = useTheme();
  return (
    <footer
      className=' w-full mt-2 
      bg-footer text-foreground
      h-[100px] flex flex-col items-center justify-center text-center text-[14px] sm:text-[20px]'
    >
      Yummy food is developed by Khrystyna Hnatiuk
    </footer>
  );
}
