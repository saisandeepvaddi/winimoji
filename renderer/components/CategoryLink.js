import React from "react";

const CategoryLink = ({ categoryId, categoryLogo, onClickListener }) => {
  return (
    <button
      className="category-button"
      onClick={() => {
        onClickListener(categoryId);
      }}
    >
      {categoryLogo}
    </button>
  );
};

export default CategoryLink;
