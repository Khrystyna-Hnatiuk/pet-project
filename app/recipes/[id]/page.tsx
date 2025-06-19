
import axios from "axios";

interface Recipe {
  id: number;
  title: string;
  image: string;
  category: string;
  time: string;
  ingredients: string[];
  instructions: string;
}

interface Props {
  params: {
    id: string;
  };
}

const RecipeDetails = async ({ params }: Props) => {
  const { id } = params;

  // Якщо хочеш Server Component, можна отримати дані тут:
  const res = await axios.get(`http://localhost:3001/api/recipes/${id}`);
  const recipe: Recipe = res.data;

  return (
    <div style={{ padding: 20 }}>
      <h1 className="mb-3">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} width="300" />
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Time:</strong> {recipe.time}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
