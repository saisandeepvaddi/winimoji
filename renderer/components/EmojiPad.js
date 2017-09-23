import React from "react";
import { connect } from "react-redux";
import Emoji from "./Emoji";

const EmojiPad = ({ emojis }) => {
  const emojisToDisplay = emojis.map((emoji, i) => {
    return <Emoji key={i} name={emoji.name} emoji={emoji.emoji} />;
  });
  return (
    <div id="searchbox-container" className="field is-grouped">
      {emojisToDisplay}
    </div>
  );
};

const mapStateToProps = state => {
  const { emojis } = state;

  return {
    emojis
  };
};

export default connect(mapStateToProps)(EmojiPad);
