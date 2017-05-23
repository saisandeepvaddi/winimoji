import React, { Component } from "react";
const { fromUnicodeToEmoji } = require("../../utilities/unicodeUtils");
const electron = require("electron");
const { clipboard } = electron;

class Emoji extends Component {
  getEmoji(e) {
    e.preventDefault();
    let emoji = e.target.value;
    clipboard.write({
      text: e.target.value
    });
  }
  render() {
    let unicode = this.props.unicode;
    let name = this.props.name;
    return (
      <div className="column is-1 is-mobile is-narrow-mobile field is-grouped">
        <abbr title={name}>
          <input
            id="emoji"
            type="button"
            value={fromUnicodeToEmoji(unicode)}
            onClick={this.getEmoji.bind(this)}
            className="button is-white"
          />

        </abbr>
      </div>
    );
  }
}

export default Emoji;
