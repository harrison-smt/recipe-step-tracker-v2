import RecipeList from './components/RecipeList';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="homepage">
      <div role="header" className="header">
        <h1>Recipe Step Tracker <span>V2</span></h1>
        <p>Let's Get Cooking</p>
      </div>
      <Link href="./recipes/add">
        <button>
          Add Recipe
        </button>
      </Link>
      <RecipeList />
    </div>
  );
}
