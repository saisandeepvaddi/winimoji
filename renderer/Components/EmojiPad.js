import React, { Component } from "react";
const { unicodesFromFile } = require("../../utilities/unicodeUtils");
import Emoji from "./Emoji";
const path = require("path");
const _ = require("lodash");

class EmojiPad extends Component {
  render() {
    const filePath = path.resolve(
      __dirname,
      "..",
      "..",
      "data",
      "emoji_unicodes.json"
    );
    let unicodes = unicodesFromFile(filePath);
    unicodes = _.uniq(unicodes);
    let emojis = unicodes.map(unicode => {
      return <Emoji unicode={unicode} key={unicode} />;
    });
    return (
      <div>
        {emojis}
      </div>
    );
  }
}

export default EmojiPad;
