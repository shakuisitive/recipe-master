import "./Search.css";
import { useLocation } from "react-router-dom";
import RecipeList from "../../components/RecipeList";
import useRecipe from "../../hooks/useRecipes";
function Search() {
  let queryString = useLocation().search;
  let queryParams = new URLSearchParams(queryString);
  let query = queryParams.get("q");
  let { recipesAvailable } = useRecipe();

  recipesAvailable = recipesAvailable.filter((r) => {
    return r.title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {recipesAvailable && <RecipeList recipes={recipesAvailable} />}
    </div>
  );
}

export default Search;
