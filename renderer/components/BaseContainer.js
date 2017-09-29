import React from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import CategoryBar from "./CategoryBar";
import EmojiPad from "./EmojiPad";
import Divider from "./Divider";

const BaseContainer = ({ categoryBar }) => {
  return (
    <div className="app-container">
      <div className="searchbar-container">
        <SearchBar />
      </div>
      <div className="categorybar-container no-drag">
        {categoryBar ? <CategoryBar /> : <span />}
      </div>
      <Divider />
      <div
        className={
          categoryBar ? (
            "emojipad-container no-drag"
          ) : (
            "emojipad-container-no-category no-drag"
          )
        }
      >
        <EmojiPad />
      </div>
    </div>
  );
};

const mapStateToProps = ({ categoryBar }) => ({ categoryBar });

export default connect(mapStateToProps)(BaseContainer);
