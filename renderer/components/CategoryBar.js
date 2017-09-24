import React from "react";
import { connect } from "react-redux";
import { getEmojisForCategory } from "../actions";
import CategoryLink from "./CategoryLink";
import { Button } from "semantic-ui-react";

const categories = [1, 2, 3, 4, 5, 6, 7, 8];
const CategoryBar = ({ getEmojisForCategory }) => {
  const categoryList = (
    <Button.Group fluid>
      {categories.map(cat => (
        <CategoryLink
          key={cat}
          categoryId={cat}
          categoryLogo={cat}
          onClickListener={getEmojisForCategory}
        />
      ))}
    </Button.Group>
  );
  return <div className="category-bar">{categoryList}</div>;
};

export default connect(null, { getEmojisForCategory })(CategoryBar);
