import React, { Component } from "react";
const electron = require("electron");
const { clipboard } = electron;

const Emoji = ({ unicode, name }) => {
  const copyEmojiToClipBoard = e => {
    e.preventDefault();
    let emoji = e.target.value;
    clipboard.write({
      text: e.target.value
    });
  };

  return (
    <div className="column is-1 is-mobile is-narrow-mobile field is-grouped">
      <abbr title={name}>
        <input
          id="emoji"
          type="button"
          value={unicode}
          onClick={copyEmojiToClipBoard}
          className="button is-white"
        />
      </abbr>
    </div>
  );
};

export default Emoji;
