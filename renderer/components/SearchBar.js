import React, { Component } from "react";
import debounce from "lodash/debounce";
import { getEmojisForSearchTerm, getInitialState } from "../actions";
import { connect } from "react-redux";

class SearchBar extends Component {
  searchEmoji() {
    const value = this.searchTerm.value;
    if (value === "") {
      this.props.getInitialState();
    } else {
      this.props.getEmojisForSearchTerm(value.toLowerCase());
    }
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search Winimoji..."
        ref={input => {
          this.searchTerm = input;
        }}
        onChange={debounce(this.searchEmoji.bind(this), 150, {
          leading: false,
          trailing: true
        })}
        className="searchbox-input no-drag"
      />
    );
  }
}

export default connect(null, { getEmojisForSearchTerm, getInitialState })(
  SearchBar
);
