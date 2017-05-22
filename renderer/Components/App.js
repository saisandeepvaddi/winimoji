import React, { Component } from "react";
import CloseButton from "./CloseButton";
import EmojiPad from "./EmojiPad";

class App extends Component {
  render() {
    return (
      <div className="container is-fluid">
        <EmojiPad />
        <CloseButton />
      </div>
    );
  }
}

export default App;
