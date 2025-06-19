"use client";
import { useTheme } from "@/components/theme/ThemeContext";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { clearFavorite } from "@/lib/store/features/favorites/favoritesSlice";


import { IFavorite } from "@/types/favorites";
import { RootState } from "@/lib/store";
const activeLightFavorite = '/images/activeFacouriteLight.svg'
const FavoritesPage = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);

  if (!favorites.length) {
    return (
      <p className="text-[30px] mt-10 text-center">No products available</p>
    );
  }

  return (
    <div>
      <div className="flex flex-row gap-2 grid grid-cols-4 ">
        {favorites.map((fav: IFavorite) => (
          <div
            key={fav.id}
            className="border w-[350px] p-4 mt-2 rounded shadow bg-white"
          >
            <img src={activeLightFavorite} className="w-[30px] " alt="" />

            <img
              src={fav.image}
              alt={fav.title}
              className="w-full h-48  object-cover mb-4 rounded"
            />
            <div className={`text-[rgb(80,6,6)]`}>
              <h2 className="text-xl font-semibold mb-2">{fav.title}</h2>
              <p>
                <strong>Category:</strong> {fav.category}
              </p>
              <p>
                <strong>Time:</strong> {fav.time}
              </p>
              <p className="mb-4">
                <strong>Ingredients:</strong>{" "}
                {fav.ingredients.slice(0, 3).join(", ")}...
              </p>{" "}
              {/* Відображаємо перші 3 інгредієнти */}
            </div>
            <Link
              href={`/api/recipes/${fav.id}`}
              className="mt-2 px-4 py-2 bg-[rgb(80,6,6)] text-white rounded"
            >
              Details
            </Link>
          </div>
        ))}{" "}
      </div>
      {!!favorites.length && (
        <button
          className="mt-4 w-full  bg-white  hover:bg-gray-200 text-[rgb(80,6,6)] font semibold py-2 rounded-md"
          onClick={() => dispatch(clearFavorite())}
        >
          {" "}
          Clear Favorites
        </button>
      )}
    </div>
  );
};

export default FavoritesPage;
