import { NextResponse } from "next/server";

const recipes = [
  {
    id: 1,
    title: "Borscht",
    category: "Soup",
    ingredients: ["pepper", "flour", "beef", "carrot", "onion", "egg"],
    instructions: "Cook borscht as usual.",
    time: "45 minutes",
    image: "https://i.pinimg.com/736x/9a/e4/a3/9ae4a3ab3a8e17add28868b1407403d5.jpg"
  },
  {
    id: 2,
    title: "Pancakes",
    category: "Breakfast",
    ingredients: ["flour", "milk", "egg", "butter"],
    instructions: "Mix ingredients and fry.",
    time: "15 minutes",
    image: "https://example.com/pancakes.jpg"
  },

  {
    id: 3,
    title: "Syrnyky",
    category: "Dessert",
    ingredients: ["cottage cheese", "egg", "flour", "sugar", "vanilla"],
    instructions: "Mix ingredients, form patties, and fry until golden.",
    time: "25 minutes",
    image: "https://i.pinimg.com/736x/f0/60/22/f060223c88f9ec7dbc56abc937f51562.jpg"
  },
  {
    id: 4,
    title: "Pasta Carbonara",
    category: "Main",
    ingredients: ["pasta", "egg", "parmesan", "bacon", "pepper"],
    instructions: "Cook pasta, mix with egg, bacon, and cheese.",
    time: "30 minutes",
    image: "https://i.pinimg.com/736x/ee/db/ef/eedbeff589e4a52a64416031c2010c26.jpg"
  },
  {
    id: 5,
    title: "Greek Salad",
    category: "Salad",
    ingredients: ["cucumber", "tomato", "feta", "olive oil", "olives"],
    instructions: "Chop vegetables and mix with feta and dressing.",
    time: "15 minutes",
    image: "https://i.pinimg.com/736x/d5/e5/64/d5e564e556e173d976555c8d7f68b30d.jpg"
  },
  {
    id: 6,
    title: "Beef Stroganoff",
    category: "Main",
    ingredients: ["beef", "onion", "mushroom", "sour cream", "butter"],
    instructions: "Cook beef with mushrooms and creamy sauce.",
    time: "40 minutes",
    image: "https://i.pinimg.com/736x/9a/36/c8/9a36c80f5ab43c6753cd49610c5d4560.jpg"
  },
  {
    id: 7,
    title: "Tomato Soup",
    category: "Soup",
    ingredients: ["tomato", "onion", "garlic", "cream", "basil"],
    instructions: "Simmer tomatoes and blend with cream and herbs.",
    time: "35 minutes",
    image: "https://i.pinimg.com/736x/dc/88/5e/dc885e424e2cc36080e3ffaee09b6dfb.jpg"
  },
  {
    id: 8,
    title: "Guacamole",
    category: "Snack",
    ingredients: ["avocado", "lime", "onion", "tomato", "cilantro"],
    instructions: "Mash avocado with chopped veggies and lime.",
    time: "10 minutes",
    image: "https://i.pinimg.com/736x/a4/77/95/a47795a62b2403645d956f91500887ed.jpg"
  },
  {
    id: 9,
    title: "Pancakes",
    category: "Breakfast",
    ingredients: ["flour", "milk", "egg", "baking powder", "sugar"],
    instructions: "Mix batter and cook pancakes on skillet.",
    time: "20 minutes",
    image: "https://i.pinimg.com/736x/98/6e/80/986e8020d901fe1c313e9460495ec5c3.jpg"
  },
  {
    id: 10,
    title: "Shakshuka",
    category: "Breakfast",
    ingredients: ["egg", "tomato", "pepper", "onion", "spices"],
    instructions: "Poach eggs in spicy tomato and pepper sauce.",
    time: "25 minutes",
    image: "https://i.pinimg.com/736x/03/50/3d/03503de53f6b35245a88aa176a8fe13b.jpg"
  },
  {
    id: 11,
    title: "Caesar Salad",
    category: "Salad",
    ingredients: ["lettuce", "croutons", "parmesan", "chicken", "caesar dressing"],
    instructions: "Toss all ingredients and serve chilled.",
    time: "20 minutes",
    image: "https://i.pinimg.com/736x/ce/b2/09/ceb20998bb8159404af6b830255c2209.jpg"
  },
  {
    id: 12,
    title: "Tiramisu",
    category: "Dessert",
    ingredients: ["mascarpone", "coffee", "sugar", "ladyfingers", "cocoa"],
    instructions: "Layer cream and soaked ladyfingers, chill.",
    time: "4 hours",
    image: "https://i.pinimg.com/736x/32/1c/64/321c64a91db8ef9666696a64dcd6877b.jpg"
  },
  {
    id: 13,
    title: "French Onion Soup",
    category: "Soup",
    ingredients: ["onions", "beef broth", "cheese", "bread", "thyme"],
    instructions: "Caramelize onions and serve with melted cheese.",
    time: "60 minutes",
    image: "https://i.pinimg.com/736x/ef/4a/44/ef4a44996c5fb33dcd9041618d8ccc4c.jpg"
  },
  {
    id: 14,
    title: "Sushi Rolls",
    category: "Main",
    ingredients: ["rice", "nori", "fish", "cucumber", "soy sauce"],
    instructions: "Roll ingredients in nori and slice.",
    time: "45 minutes",
    image: "https://i.pinimg.com/736x/09/15/1d/09151d0100060e1de5165623865f2c2b.jpg"
  },
  {
    id: 15,
    title: "Miso Soup",
    category: "Soup",
    ingredients: ["miso paste", "tofu", "scallion", "wakame", "dashi"],
    instructions: "Simmer all ingredients and serve hot.",
    time: "15 minutes",
    image: "https://i.pinimg.com/736x/f6/b2/a6/f6b2a66096364decb6e3b92f55812a39.jpg"
  },
  {
    id: 16,
    title: "Chili Con Carne",
    category: "Main",
    ingredients: ["beef", "beans", "tomato", "chili", "onion"],
    instructions: "Simmer beef and beans with spices.",
    time: "1 hour",
    image: "https://i.pinimg.com/736x/16/af/94/16af94baf3e2f323ef1d9dc077441819.jpg"
  },
  {
    id: 17,
    title: "Apple Pie",
    category: "Dessert",
    ingredients: ["apples", "cinnamon", "flour", "butter", "sugar"],
    instructions: "Fill crust with apple mix and bake.",
    time: "90 minutes",
    image: "https://i.pinimg.com/736x/d8/1e/bc/d81ebca5e704247737f74c0d4d90335c.jpg"
  },
  {
    id: 18,
    title: "Falafel",
    category: "Snack",
    ingredients: ["chickpeas", "onion", "garlic", "parsley", "spices"],
    instructions: "Blend and fry into small balls.",
    time: "30 minutes",
    image: "https://i.pinimg.com/736x/18/8c/2a/188c2a49ab3882225c28d93b8950862c.jpg"
  },
  {
    id: 19,
    title: "Croissant",
    category: "Breakfast",
    ingredients: ["flour", "yeast", "butter", "sugar", "milk"],
    instructions: "Fold dough with butter and bake.",
    time: "3 hours",
    image: "https://i.pinimg.com/736x/17/13/ba/1713ba14e4712cdaa02a781864b6558c.jpg"
  },
  {
    id: 20,
    title: "Pumpkin Soup",
    category: "Soup",
    ingredients: ["pumpkin", "cream", "onion", "nutmeg", "garlic"],
    instructions: "Blend cooked pumpkin with cream and spices.",
    time: "40 minutes",
    image: "https://i.pinimg.com/736x/74/d0/c6/74d0c62b90261ed9556c4c8d6cab4657.jpg"
  },
  {
    id: 21,
    title: "Steak",
    category: "Main",
    ingredients: ["beef", "salt", "pepper", "butter", "garlic"],
    instructions: "Grill steak to desired doneness.",
    time: "20 minutes",
    image: "https://i.pinimg.com/736x/b8/6a/4f/b86a4f247058db3b35e21003d2f753cb.jpg"
  },
  {
    id: 22,
    title: "Omelette",
    category: "Breakfast",
    ingredients: ["egg", "milk", "cheese", "tomato", "pepper"],
    instructions: "Whisk and cook egg mix in pan.",
    time: "10 minutes",
    image: "https://i.pinimg.com/736x/96/bd/7d/96bd7d86e5214e4a7147a0d9a355e81e.jpg"
  },
  {
    id: 23,
    title: "Lasagna",
    category: "Main",
    ingredients: ["pasta", "meat", "tomato", "cheese", "bechamel"],
    instructions: "Layer pasta and sauce, then bake.",
    time: "60 minutes",
    image: "https://i.pinimg.com/736x/84/cb/6f/84cb6f5fafeefb7d3ece4dbd0077683e.jpg"
  },
  {
    id: 24,
    title: "Fish Tacos",
    category: "Main",
    ingredients: ["fish", "tortilla", "cabbage", "salsa", "lime"],
    instructions: "Assemble tacos with fresh ingredients.",
    time: "25 minutes",
    image: "https://i.pinimg.com/736x/3f/e0/dd/3fe0dd1b8b457668f9b7c61d9b70d403.jpg"
  },
  {
    id: 25,
    title: "Couscous Salad",
    category: "Salad",
    ingredients: ["couscous", "cucumber", "tomato", "lemon", "olive oil"],
    instructions: "Mix couscous with fresh veggies.",
    time: "20 minutes",
    image: "https://i.pinimg.com/736x/8f/2d/48/8f2d487ea9fb0fa4d3ab53ffe2e753fe.jpg"
  },
  {
    id: 26,
    title: "Burger",
    category: "Main",
    ingredients: ["bun", "beef", "cheese", "lettuce", "tomato"],
    instructions: "Grill patty, assemble burger.",
    time: "30 minutes",
    image: "https://i.pinimg.com/736x/8b/36/9f/8b369fefca44952ef36cc09f830c00e7.jpg"
  },
  {
    id: 27,
    title: "Ratatouille",
    category: "Main",
    ingredients: ["eggplant", "zucchini", "tomato", "onion", "garlic"],
    instructions: "Layer vegetables and bake.",
    time: "50 minutes",
    image: "https://i.pinimg.com/736x/8e/34/0c/8e340c442de31ca2639983b278f1ec58.jpg"
  },
  {
    id: 28,
    title: "Fried Rice",
    category: "Main",
    ingredients: ["rice", "egg", "carrot", "peas", "soy sauce"],
    instructions: "Stir-fry all ingredients together.",
    time: "25 minutes",
    image: "https://i.pinimg.com/736x/df/9f/bf/df9fbf01a21c9111807901a6e34dfa73.jpg"
  },
  {
    id: 29,
    title: "Chocolate Cake",
    category: "Dessert",
    ingredients: ["flour", "cocoa", "sugar", "egg", "butter"],
    instructions: "Mix and bake chocolate batter.",
    time: "60 minutes",
    image: "https://i.pinimg.com/736x/fd/49/15/fd49150a45f56427ddc5da1da08861f4.jpg"
  },
  {
    id: 30,
    title: "Goulash",
    category: "Main",
    ingredients: ["beef", "paprika", "onion", "potato", "carrot"],
    instructions: "Simmer meat and veggies in paprika sauce.",
    time: "1 hour 15 minutes",
    image: "https://i.pinimg.com/736x/30/24/c9/3024c9c76a83341d4f7c9c639752e999.jpg"
  }
  // інші рецепти...
];

export async function GET() {
  return NextResponse.json(recipes);
}
