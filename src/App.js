import { BrowserRouter, Routes, Route } from "react-router-dom";

// page components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Create from "./pages/create/Create";
import Recipe from "./pages/recipe/Recipe";

// components
import ThemeSelector from "./components/ThemeSelector";

// custom hooks
import { useTheme } from "./hooks/useTheme";

// styles
import "./App.css";

function App() {
  let { mode } = useTheme();
  return (
    <div className={`App ${mode === "dark" && "dark"}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
