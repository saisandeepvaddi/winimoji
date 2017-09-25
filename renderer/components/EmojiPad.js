import React from "react";
import { connect } from "react-redux";
import Emoji from "./Emoji";
import EmojiGrid from "./EmojiGrid";

const EmojiPad = ({ emojis }) => {
  const emojisToDisplay = emojis.map((emoji, i) => {
    return <Emoji key={i} name={emoji.name} emoji={emoji.emoji} />;
  });
  return <EmojiGrid>{emojisToDisplay}</EmojiGrid>;
};

const mapStateToProps = state => {
  const { emojis } = state;

  return {
    emojis
  };
};

export default connect(mapStateToProps)(EmojiPad);
