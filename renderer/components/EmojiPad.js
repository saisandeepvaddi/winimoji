import React from "react";
import { connect } from "react-redux";
import Emoji from "./Emoji";
import { Grid } from "semantic-ui-react";

const EmojiPad = ({ emojis }) => {
  const emojisToDisplay = emojis.map((emoji, i) => {
    return (
      <Grid.Column key={i} width={1}>
        <Emoji name={emoji.name} emoji={emoji.emoji} />
      </Grid.Column>
    );
  });
  return (
    <Grid columns="equal" relaxed>
      {emojisToDisplay}
    </Grid>
  );
};

const mapStateToProps = state => {
  const { emojis } = state;

  return {
    emojis
  };
};

export default connect(mapStateToProps)(EmojiPad);
