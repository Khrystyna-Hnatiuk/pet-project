"use client";
import React from "react";
import Link from "next/link";
import FavoriteCard from "@/app/favorites/favoriteCard";
import useFavorites from "@/configs/hooks/useFavorite";

interface IProduct {
  id: number;
  title: string;
  category: string;
  ingredients: string[];
  instructions: string;
  time: string;
  image: string;
}

interface Props {
  recipes: IProduct[];
}

const RecipeCard: React.FC<Props> = ({ recipes }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
  className="border mb-4 p-4 pb-2 sm:pb-10 rounded shadow bg-white w-full sm:w-[90%] mx-auto text-xs sm:text-base"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-32 sm:h-48 max-h-60 object-cover mb-3 rounded"
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
