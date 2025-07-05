import React from "react";
import useFavorites from "@/configs/hooks/useFavorite";
// import { useTheme } from "@/components/theme/ThemeContext";
// import axios from "axios";
import Link from "next/link";
import FavoriteCard from "@/app/favorites/favoriteCard";
interface IProduct {
    id:number;
    title:string;
    category:string;
    ingredients:string[];
    instructions:string;
    time: string;
    image:string;
}

const RecipeCard = ({ recipes }: { recipes: IProduct[] }) => {
  // const { theme } = useTheme();
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div>
      {recipes.map((recipe: IProduct) => (
        <div
          key={recipe.id}
          className="border mb-4 p-4 pb-10 rounded shadow bg-white"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48  object-cover mb-3 rounded"
          />
          <h2 className="text-xl font-semibold mb-4">{recipe.title}</h2>
          <p>
            <strong>Category:</strong> {recipe.category}
          </p>
          <p>
            <strong>Time:</strong> {recipe.time}
          </p>
          <p className="mb-4">
            <strong>Ingredients:</strong>{" "}
            {recipe.ingredients.slice(0, 3).join(", ")}...
          </p>
          <Link
            href={`/recipes/${recipe.id}`}
            className="mt-4 px-4 py-2 bg-[rgb(80,6,6)] text-white rounded"
          >
            Details
          </Link>
          <FavoriteCard
            isFavorite={isFavorite(recipe)}
            onClick={() => toggleFavorite(recipe)}
          />
        </div>
      ))}
    </div>
  );
};
export default RecipeCard;
