'use client';

import RecipeCard from './RecipeCard';
import { useRecipes } from '../context/RecipeContext';

export default function RecipeList() {
  const { recipes } = useRecipes();

  if (recipes.length === 0) {
    return <p>Add your first recipe today!</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
