import Link from 'next/link';

export default function RecipeCard({ recipe }) {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
        <p className="text-gray-600 mt-2">
          {recipe.steps.length} step{recipe.steps.length !== 1 ? 's' : ''}
        </p>
      </div>
    </Link>
  );
}
