import React, { Component } from "react";
import { connect } from "react-redux";

const CategoryLink = ({
  categoryId,
  categoryLogo,
  onClickListener,
  selectedCategory
}) => {
  let isActive = false;
  return (
    <button
      className={
        selectedCategory === categoryId ? (
          "category-button current-category"
        ) : (
          "category-button"
        )
      }
      onClick={() => {
        onClickListener(categoryId);
      }}
    >
      {categoryLogo}
    </button>
  );
};

const mapStateToProps = ({ selectedCategory }) => ({ selectedCategory });

export default connect(mapStateToProps)(CategoryLink);
