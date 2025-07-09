import axios from "axios";
import { JSX } from "react";

interface Recipe {
  id: number;
  title: string;
  image: string;
  category: string;
  time: string;
  ingredients: string[];
  instructions: string;
}

type PageProps= {
  params:  Promise<{id:string}>;
};

export default async function RecipeDetails({ params }: PageProps): Promise<JSX.Element> {
    const resolvedParams = await params;

  const { id } = resolvedParams;

  const res = await axios.get(`http://localhost:3001/api/recipes/${id}`);
  const recipe: Recipe = res.data;

  return (
    <div style={{ padding: 20 }}>
      <h1 className="mb-3">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} width={300} />
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Time:</strong> {recipe.time}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
    </div>
  );
}
