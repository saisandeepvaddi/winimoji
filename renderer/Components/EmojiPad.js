import React, { Component } from "react";
import Emoji from "./Emoji";
import CloseButton from "./CloseButton";
import { connect } from "react-redux";
import { getAllEmojis, getEmojis, makeAllUniqueUnicodes } from "../actions";
import debounce from "lodash/debounce";

class EmojiPad extends Component {
  componentDidMount() {
    this.props.getAllEmojis();
    this.emoji_name.focus();
  }

  searchEmoji() {
    if (this.emoji_name.value === "") {
      this.props.getAllEmojis();
    } else {
      this.props.getEmojis(this.emoji_name.value);
    }
  }

  render() {
    let filtered_emojis = this.props.emojis.map(unicode => {
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
              ref={input => (this.emoji_name = input)}
              placeholder="Search Winimoji"
              onChange={debounce(this.searchEmoji.bind(this), 150, {
                leading: false,
                trailing: true
              })}
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

const mapStateToProps = state => {
  const { emojis } = state;
  return { emojis };
};

export default connect(mapStateToProps, {
  getAllEmojis,
  getEmojis
})(EmojiPad);
