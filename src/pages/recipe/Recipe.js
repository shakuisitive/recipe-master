import "./Recipe.css";
import { useParams } from "react-router-dom";

import { useTheme } from "../../hooks/useTheme";
import useRecipeDataById from "../../hooks/useRecipeDataById";

function Recipe() {
  // TRYING TO GET A DOC BY ID
  // (async () => {
  //   // Create a query against the collection
  //   const q = query(referencedCollection, where("id", "==", "1"));

  //   // Execute the query
  //   const querySnapshot = await getDocs(q);

  //   console.log(querySnapshot.docs[0].data());
  // })();
  // FINISHED: TRYING TO GET A DOC BY ID

  let { mode, color } = useTheme();
  let colorForTitle = mode !== "dark" && color;
  let { id } = useParams();
  let { data: recipe, isPending, error } = useRecipeDataById(id);

  return (
    <div style={{ border: "3px solid " + color }} className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title" style={{ color: colorForTitle }}>
            {recipe.title}
          </h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={crypto.randomUUID()}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}

export default Recipe;
