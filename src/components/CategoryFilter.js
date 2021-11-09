import React from "react";

function CategoryFilter({ categories, handleCatClick, catSelected }) {
  // console.log(categories)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button className={(catSelected !== category)? "":"selected"} key={category} onClick={() => handleCatClick(category)}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;





