import React, { Component } from "react";
import { groupData } from "../config";
import { connect } from "react-redux";
class Pad extends Component {
  constructor(props) {
    super(props);
    this.category = "no-category";
  }
  componentDidMount() {
    this.category = groupData[this.props.category];
  }
  render() {
    let filtered_emojis = this.props.emojis.map(emojiObj => {
      return (
        <Emoji
          emoji={emojiObj.emoji}
          name={emojiObj.name}
          key={emojiObj.unicode}
        />
      );
    });
    return (
      <div className="columns is-gapless is-multiline is-mobile">
        {filtered_emojis}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const emojis = state[ownProps.category];
};

export default connect(mapStateToProps)(Pad);
