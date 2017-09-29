import React from "react";
const electron = require("electron");
const { clipboard } = electron;
import debounce from "lodash/debounce";

const Emoji = ({ name, emoji }) => {
  const copyEmojiToClipBoard = e => {
    clipboard.clear();
    clipboard.write({
      text: emoji
    });
  };

  return (
    <div className="emoji">
      <abbr title={name}>
        <button
          onClick={debounce(copyEmojiToClipBoard, 50, {
            leading: false,
            trailing: true
          })}
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
