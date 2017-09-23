import React from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import CategoryBar from "./CategoryBar";
import EmojiPad from "./EmojiPad";

const Container = ({ categoryBar }) => {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      {categoryBar ? <CategoryBar /> : <span />}
      <EmojiPad />
    </div>
  );
};

const mapStateToProps = ({ categoryBar }) => ({ categoryBar });

export default connect(mapStateToProps)(Container);
