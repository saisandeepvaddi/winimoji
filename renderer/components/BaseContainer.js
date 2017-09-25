import React from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import CategoryBar from "./CategoryBar";
import EmojiPad from "./EmojiPad";
import CloseButton from "./CloseButton";

const BaseContainer = ({ categoryBar }) => {
  return (
    <div className="app-container">
      <div className="searchbar-container">
        <SearchBar />
        <CloseButton />
      </div>
      <div className="categorybar-container no-drag">
        {categoryBar ? <CategoryBar /> : <span />}
      </div>
      <div className="emojipad-container no-drag">
        <EmojiPad />
      </div>
    </div>
  );
};

const mapStateToProps = ({ categoryBar }) => ({ categoryBar });

export default connect(mapStateToProps)(BaseContainer);
