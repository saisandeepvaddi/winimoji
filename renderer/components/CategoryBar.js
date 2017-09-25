import React from "react";
import { connect } from "react-redux";
import { getEmojisForCategory } from "../actions";
import CategoryLink from "./CategoryLink";

const categories = [1, 2, 3, 4, 5, 6, 7, 8];
const logos = ["😃", "🐵", "🍇", "🌍", "✨", "🎸", "🔅", "🚩", "⭐"];
const CategoryBar = ({ getEmojisForCategory }) => {
  const categoryList = categories.map((cat, i) => (
    <CategoryLink
      key={cat}
      categoryId={cat}
      categoryLogo={logos[i]}
      onClickListener={getEmojisForCategory}
    />
  ));
  return <div className="category-bar">{categoryList}</div>;
};

export default connect(null, { getEmojisForCategory })(CategoryBar);
