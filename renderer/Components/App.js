import React, { Component } from "react";
import EmojiPad from "./EmojiPad";
import Banner from "./Banner";

class App extends Component {
  render() {
    return (
      <div id="app-container" className="container is-fluid">
        <EmojiPad />
      </div>
    );
  }
}

export default App;
