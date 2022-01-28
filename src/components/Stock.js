import React from "react";
import Search from "./Search";

function Stock() {
  return (
    <div>
      <Search />

      <div className="stock-buttons">
      <button className="sort-filter">
        <i className="fas fa-sort"></i>
        <span> </span>
        Sort By
      </button>
      <button className="sort-filter">
        <i className="fas fa-filter"> </i>
        <span> </span>
        Filter By
      </button>
      </div>
    </div>
  );
}

export default Stock;
