"use client";
import Image from "next/image";
import { useTheme } from "@/components/theme/ThemeContext";
import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./recipes/recipeCard/page";
export default function Main() {
  const { theme, toggleTheme } = useTheme();
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/recipes")
      .then((res) => {
        setRecipes(res.data.slice(0, 5));
      })
      .catch((err) => {
        console.log("Error fetching recipes", err);
      });
  }, []);

  return (
    <div className={`flex w-full gap-10 mt-10 px-8`}>
      <div className={`w-3/5`}>
        <div className="flex gap-2 items-center">
          <input
            className={`w-full h-[50px] border border-transparent focus:border-[rgb(80,6,6)] pl-[10px] outline-none rounded ${
              theme === "dark" ? "bg-white text-[rgb(50,6,6)]" : "bg-white"
            }
           
            `}
            type="text"
            placeholder="Enter an ingredient or dish name"
          />
          <button
            className={`px-4 py-2 ${
              theme === "dark"
                ? "bg-white  text-[rgb(80,6,6)]  "
                : "bg-[rgb(80,6,6)] text-white "
            } w-[30%] h-[50px] rounded`}
          >
            Get recipe
          </button>
        </div>
      </div>

      <div
        style={{
          border: "1px solid",
          borderColor: theme === "dark" ? "rgb(80, 72, 72)" : "rgb(230, 223, 223)",
        }}
        className='w-2/5 min-h-[400px] rounded p-4 ' 
      >
        <h2 className="text-center text-[25px] mb-4">Popular recipes</h2>
        <div
          className={`p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 ${
            theme === "dark" ? " text-[rgb(80,6,6)]" : "text-[rgb(80,6,6)]"
          }`}
        >
          <RecipeCard recipes={recipes} />
        </div>
      </div>
    </div>
  );
}
