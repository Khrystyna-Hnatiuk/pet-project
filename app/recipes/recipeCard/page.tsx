import React from 'react';
import RecipeCard from './recipeCard';

interface IProduct {
  id: number;
  title: string;
  category: string;
  ingredients: string[];
  instructions: string;
  time: string;
  image: string;
}

export default function Page() {
  const recipes: IProduct[] = [
    {
      id: 1,
      title: 'Test recipe',
      category: 'Category',
      ingredients: ['ing1', 'ing2'],
      instructions: 'Do this and that',
      time: '30 mins',
      image: '/test.jpg',
    },
  ];

  return (
    <div>
      <RecipeCard recipes={recipes} />
    </div>
  );
}
