import { createContext, useState } from "react";

export let RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const [recipesAvailable, setRecipesAvailable] = useState([]);
  return (
    <RecipeContext.Provider value={{ recipesAvailable, setRecipesAvailable }}>
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeProvider;
