'use client';
import { useState } from 'react';
import { useRecipes } from '../../context/RecipeContext';
import { useRouter } from 'next/navigation';

export default function AddRecipePage() {
  const [title, setTitle] = useState('');
  const [steps, setSteps] = useState('');
  const { addRecipe } = useRecipes();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const stepsArray = steps.split('\n').filter((step) => step.trim() !== '');
    addRecipe(title, stepsArray);
    router.push('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Title"
          className="block w-full mb-4 p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter steps (one per line)"
          className="block w-full mb-4 p-2 border rounded"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          rows={6}
          required
        />
        <button
          type="submit"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
