import React from "react";
const electron = require("electron");
const { clipboard } = electron;
import throttle from "lodash/throttle";

const Emoji = ({ name, emoji }) => {
  const copyEmojiToClipBoard = e => {
    clipboard.clear();
    clipboard.writeText(emoji, "utf-8");
  };

  return (
    <div className="emoji">
      <abbr title={name}>
        <button
          onClick={throttle(copyEmojiToClipBoard, 100)}
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
