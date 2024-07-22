import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { RecipeProvider } from "./context/RecipesContext";
ReactDOM.render(
  <React.StrictMode>
    <RecipeProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </RecipeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
