import React from "react";
const electron = require("electron");
const { clipboard } = electron;
import { Container, Button } from "semantic-ui-react";

const Emoji = ({ name, emoji }) => {
  const copyEmojiToClipBoard = e => {
    clipboard.write({
      text: emoji
    });
  };

  return (
    <Container>
      <abbr title={name}>
        <Button
          id="emoji"
          compact
          basic
          size="medium"
          onClick={copyEmojiToClipBoard}
          className="emoji-container"
        >
          {emoji}
        </Button>
      </abbr>
    </Container>
  );
};

export default Emoji;
