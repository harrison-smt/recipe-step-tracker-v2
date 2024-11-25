'use client';
import { useRecipes } from '../../context/RecipeContext';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RecipePage({ params }) {
  const { recipes, editRecipe, deleteRecipe } = useRecipes();
  const router = useRouter();

  const recipe = recipes.find((r) => r.id === React.use(params).id);
  const [title, setTitle] = useState(recipe?.title || '');
  const [steps, setSteps] = useState(recipe?.steps.join('\n') || '');

  const handleSave = () => {
    const stepsArray = steps.split('\n').filter((step) => step.trim() !== '');
    editRecipe(recipe.id, title, stepsArray);
    router.push('/');
  };

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    router.push('/');
  };

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      {/* <input
        type="text"
        className="block w-full mb-4 p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> */}
      <textarea
        className="block w-full mb-4 p-2 border rounded"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        rows={6}
      />
      <button
        onClick={handleSave}
      >
        Save
      </button>
      <button
        onClick={handleDelete}
        className="btn-outline mx-4"
      >
        Delete
      </button>
    </div>
  );
}
