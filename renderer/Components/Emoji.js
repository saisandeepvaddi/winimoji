import React, { Component } from "react";
const { fromUnicodeToEmoji } = require("../../utilities/unicodeUtils");
const electron = require("electron");
const { clipboard } = electron;

class Emoji extends Component {
  getEmoji(e) {
    e.preventDefault();
    let emoji = e.target.value;
    console.log(emoji);
    clipboard.write({
      text: e.target.value
    });
  }
  render() {
    let unicode = this.props.unicode;
    return (
      <div>
        <input
          type="button"
          value={fromUnicodeToEmoji(unicode)}
          onClick={this.getEmoji.bind(this)}
        />
        {unicode}
      </div>
    );
  }
}

export default Emoji;
