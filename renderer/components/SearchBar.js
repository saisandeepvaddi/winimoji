import React, { Component } from "react";
import debounce from "lodash/debounce";
import { getEmojisForSearchTerm, getInitialState } from "../actions";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";

class SearchBar extends Component {
  searchEmoji(e, { value }) {
    if (value === "") {
      this.props.getInitialState();
    } else {
      this.props.getEmojisForSearchTerm(value.toLowerCase());
    }
  }

  render() {
    return (
      <Input
        type="text"
        icon="search"
        tabIndex={1}
        fluid={true}
        placeholder="Search Winimoji..."
        onChange={debounce(this.searchEmoji.bind(this), 150, {
          leading: false,
          trailing: true
        })}
        className="no-drag"
      />
    );
  }
}

export default connect(null, { getEmojisForSearchTerm, getInitialState })(
  SearchBar
);
