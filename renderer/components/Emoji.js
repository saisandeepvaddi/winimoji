import React from "react";
const electron = require("electron");
const { clipboard } = electron;

const Emoji = ({ name, emoji }) => {
  const copyEmojiToClipBoard = e => {
    e.preventDefault();
    clipboard.write({
      text: e.target.value
    });
  };

  return (
    <div>
      <abbr title={name}>
        <input
          id="emoji"
          type="button"
          value={emoji}
          onClick={copyEmojiToClipBoard}
        />
      </abbr>
    </div>
  );
};

export default Emoji;
