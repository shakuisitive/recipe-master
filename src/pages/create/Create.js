import "./Create.css";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useTheme } from "../../hooks/useTheme";
import useRecipesDatabase from "../../hooks/useRecipesDatabase";

import { addDoc } from "firebase/firestore";
import referencedCollection from "../../firebase/firebaseConfig";

function Create() {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);

  let { data: recipes } = useRecipesDatabase();
  let { mode, color } = useTheme();
  let colorForHeadline = mode === "dark" && "#e5e5e5";

  let handleAdd = (e) => {
    e.preventDefault();
    let ing = newIngredient.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIng) => [...prevIng, ing]);
    }

    setNewIngredient("");
    ingredientInput.current.focus();
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    // BUILDING DATA (RECIPE DOC) TO ADD TO THE DATABASE
    let docToAdd = {
      id: String(parseInt(recipes.slice(-1)[0]["id"]) + 1),
      timeCreated: new Date().getTime(),
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes",
    };
    // ADDING THE DOC
    await addDoc(referencedCollection, docToAdd);
    // RESETTING INPUT FIELDS
    setTitle("");
    setMethod("");
    setCookingTime("");
    setNewIngredient("");
    setIngredients([]);
    // DONE: RESETTING INPUT FIELDS

    // NAVIGATION THE USER BACK TO HOMEPAGE TO SEE THE NEWLY ADDED DOCUMENT
    navigate("/");
  };

  return (
    <div className="create">
      <h2 className="page-title" style={{ color: colorForHeadline }}>
        Add a new recipe
      </h2>
      <form
        className={`${mode === "dark" && "dark-add-new-recipe-form"}`}
        onSubmit={handleSubmit}
      >
        <label>
          <span>Recipe title:</span>
          <input
            type={"text"}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            required
          />
        </label>
        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              type={"text"}
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button
              style={{ backgroundColor: color }}
              onClick={handleAdd}
              className="btn "
            >
              Add
            </button>
          </div>
        </label>
        <p>
          Current ingredients:{"   "}
          {ingredients.map((ing, index) => {
            if (index === ingredients.length - 1) {
              // Last item: add period without a space
              return <em key={crypto.randomUUID()}>{ing}.</em>;
            } else {
              // Other items: add comma with a space
              return <em key={crypto.randomUUID()}>{ing}, </em>;
            }
          })}
        </p>
        <label>
          <span>Recipe method:</span>
          <textarea
            type={"text"}
            onChange={(e) => {
              setMethod(e.target.value);
            }}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input
            type={"number"}
            onChange={(e) => {
              setCookingTime(e.target.value);
            }}
            value={cookingTime}
            required
          />
        </label>

        <button style={{ backgroundColor: color }} className="btn ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
