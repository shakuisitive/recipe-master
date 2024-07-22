import React, { useEffect } from "react";
//styles
import "./Home.css";
//components
import RecipeList from "../../components/RecipeList";
//hook
import useRecipesDatabase from "../../hooks/useRecipesDatabase";
import useRecipes from "../../hooks/useRecipes";

function Home() {
  let { data, isPending, error } = useRecipesDatabase();
  let { setRecipesAvailable } = useRecipes();

  useEffect(() => {
    if (data) {
      setRecipesAvailable(data);
    }
  }, [data, setRecipesAvailable]);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loding...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

export default Home;
