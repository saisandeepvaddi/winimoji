import React from "react";
const electron = require("electron");
const { clipboard } = electron;

const Emoji = ({ name, emoji }) => {
  const copyEmojiToClipBoard = e => {
    clipboard.write({
      text: emoji
    });
  };

  return (
    <div className="emoji">
      <abbr title={name}>
        <button
          onClick={copyEmojiToClipBoard}
          className="emoji-button"
          role="button"
        >
          {emoji}
        </button>
      </abbr>
    </div>
  );
};

export default Emoji;
