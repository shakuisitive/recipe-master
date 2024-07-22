import "./SearchBar.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [term, setTerm] = useState("");
  let navigate = useNavigate();
  let handleSubmit = (e) => {
    e.preventDefault();
    setTerm("");
    navigate(`/search?q=${term}`);
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          value={term}
          type={"text"}
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
}

export default SearchBar;
