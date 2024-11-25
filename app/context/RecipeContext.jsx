'use client';
import { createContext, useContext, useState } from 'react';

const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (title, steps) => {
    const newRecipe = {
      id: Date.now().toString(),
      title,
      steps,
    };
    setRecipes((prev) => [...prev, newRecipe]);
  };

  const editRecipe = (id, newTitle, newSteps) => {
    setRecipes((prev) =>
      prev.map((recipe) =>
        recipe.id === id ? { ...recipe, title: newTitle, steps: newSteps } : recipe
      )
    );
  };

  const deleteRecipe = (id) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, editRecipe, deleteRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  return useContext(RecipeContext);
}
