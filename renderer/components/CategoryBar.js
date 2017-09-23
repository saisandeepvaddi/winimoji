import React from "react";
import { connect } from "react-redux";
import { getEmojisForCategory } from "../actions";

const CategoryLink = ({ categoryId, categoryLogo, onClickListener }) => {
  return (
    <button
      onClick={() => {
        onClickListener(categoryId);
      }}
    >
      {categoryLogo}
    </button>
  );
};

const categories = [1, 2, 3, 4, 5, 6, 7, 8];
const CategoryBar = ({ getEmojisForCategory }) => {
  const categoryList = (
    <ul>
      {categories.map(cat => (
        <li key={cat}>
          <CategoryLink
            categoryId={cat}
            categoryLogo={cat}
            onClickListener={getEmojisForCategory}
          />
        </li>
      ))}
    </ul>
  );
  return <div className="category-bar">{categoryList}</div>;
};

export default connect(null, { getEmojisForCategory })(CategoryBar);
