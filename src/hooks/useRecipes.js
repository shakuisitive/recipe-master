import { useContext } from "react";
import { RecipeContext } from "../context/RecipesContext";

export default function useRecipe() {
  let context = useContext(RecipeContext);

  if (!context) {
    throw new Error(
      "This context can only be used within the defined components"
    );
  } else {
    return context;
  }
}
