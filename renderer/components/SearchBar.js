import React, { Component } from "react";
import debounce from "lodash/debounce";
import { getEmojisForSearchTerm, getInitialState } from "../actions";
import { connect } from "react-redux";

class SearchBar extends Component {
  searchEmoji() {
    const searchTerm = this.emojiSearchInputElement.value;
    if (searchTerm === "") {
      this.props.getInitialState();
    } else {
      this.props.getEmojisForSearchTerm(searchTerm.toLowerCase());
    }
  }
  render() {
    return (
      <input
        id="searchbox"
        type="text"
        ref={input => (this.emojiSearchInputElement = input)}
        placeholder="Search Winimoji"
        onChange={debounce(this.searchEmoji.bind(this), 150, {
          leading: false,
          trailing: true
        })}
        className="input"
      />
    );
  }
}

export default connect(null, { getEmojisForSearchTerm, getInitialState })(
  SearchBar
);
