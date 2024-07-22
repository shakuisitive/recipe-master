import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import "./RecipeList.css";

function RecipeList({ recipes }) {
  let { mode, color } = useTheme();
  let stylesForButton = {
    backgroundColor: color,
    color: "#e5e5e5",
    fontWeight: "bold",
  };

  let recipesSortedByNewlyCreated = recipes.toSorted(
    (a, b) => b.timeCreated - a.timeCreated
  );

  return (
    <div className="recipe-list">
      {recipesSortedByNewlyCreated.map((recipe) => {
        return (
          <div
            style={{ border: "1px solid " + color }}
            key={crypto.randomUUID()}
            className={`card ${mode}`}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime}</p>
            <div> {recipe.method.substring(0, 100)}... </div>
            <Link style={stylesForButton} to={`/recipes/${recipe.id}`}>
              Cook This
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default RecipeList;
