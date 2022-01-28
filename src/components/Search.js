import React from "react";


const Search = () => (
  <header className="searchBar">
  <form action="/" method="get" >
      <input
          type="text"
          id="header-search"
          placeholder="Search for ..."
      />
      <button type="submit">
      <i className="fas fa-search"></i>
      </button>
  </form>
  </header>
);

export default Search;
