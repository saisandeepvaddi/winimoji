import React, { Component } from "react";
const { unicodesFromFile } = require("../../utilities/unicodeUtils");
import Emoji from "./Emoji";
const path = require("path");
const _ = require("lodash");

class EmojiPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicodes: [],
      emojis: []
    };
  }
  componentDidMount() {
    const filePath = path.resolve(
      __dirname,
      "..",
      "..",
      "data",
      "emoji_unicode_objects.json"
    );
    let unicodes = unicodesFromFile(filePath);
    unicodes = _.uniqBy(unicodes, "code");
    this.setState((prevState, props) => ({
      unicodes,
      emojis: unicodes
    }));
  }

  searchEmoji() {
    let filtered = this.state.unicodes.filter(unicode => {
      return unicode.name.includes(this.emoji_name.value);
    });

    this.setState((prevState, props) => ({
      emojis: filtered
    }));
  }

  render() {
    let filtered_emojis = this.state.emojis.map(unicode => {
      return (
        <Emoji unicode={unicode.code} name={unicode.name} key={unicode.code} />
      );
    });
    return (
      <div>
        <input
          type="text"
          ref={input => this.emoji_name = input}
          placeholder="Search Emoji"
          onChange={this.searchEmoji.bind(this)}
        />
        {filtered_emojis}
      </div>
    );
  }
}

export default EmojiPad;
