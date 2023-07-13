import React from "react";
import "../styles/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input type="text" placeholder="Search for recipes" className="input" />
      <button className="button">Search</button>
    </div>
  );
};

export default SearchBar;
