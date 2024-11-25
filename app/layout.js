import { RecipeProvider } from './context/RecipeContext';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RecipeProvider>{children}</RecipeProvider>
      </body>
    </html>
  );
}
