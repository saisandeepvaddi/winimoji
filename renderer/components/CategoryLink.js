import React from "react";
import { Button } from "semantic-ui-react";

const CategoryLink = ({ categoryId, categoryLogo, onClickListener }) => {
  return (
    <Button
      color="green"
      onClick={() => {
        onClickListener(categoryId);
      }}
    >
      {categoryLogo}
    </Button>
  );
};

export default CategoryLink;
