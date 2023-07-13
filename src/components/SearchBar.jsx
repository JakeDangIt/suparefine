import React from "react";
import "../styles/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input type="text" placeholder="search for recipes" className="input" />
      <button className="button"><img src="/searchIcon.svg" /></button>
    </div>
  );
};

export default SearchBar;
