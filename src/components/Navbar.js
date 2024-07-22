import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useTheme } from "../hooks/useTheme";
function Navbar() {
  let { color } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Recipe Master</h1>
        </Link>
        <SearchBar />
        <Link to="/create">
          <h1>Create Recipe</h1>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
