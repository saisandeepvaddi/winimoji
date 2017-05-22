import React, { Component } from "react";
const { unicodesFromFile } = require("../../utilities/unicodeUtils");
import Emoji from "./Emoji";
import CloseButton from "./CloseButton";
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
      return unicode.name
        .toLowerCase()
        .includes(this.emoji_name.value.toLowerCase());
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
        <div id="searchbox-container" className="field is-grouped">
          <p className="control is-expanded">
            <input
              id="searchbox"
              type="text"
              ref={input => this.emoji_name = input}
              placeholder="Search Emoji"
              onChange={this.searchEmoji.bind(this)}
              className="input"
            />
          </p>
          <p id="draggable" className="control">
            ✥
          </p>
          <p className="control">
            <CloseButton />
          </p>

        </div>
        <div className="columns is-gapless is-multiline is-mobile">
          {filtered_emojis}
        </div>
      </div>
    );
  }
}

export default EmojiPad;
