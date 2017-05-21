import React, { Component } from "react";
const utils = require("../../utilities/unicodeUtils");
import CloseButton from './CloseButton';
class App extends Component {
  render() {
    return (
      <div>
        Hello {utils.fromUnicodeToEmoji("U+1F600")}
        <CloseButton />
      </div>
    );
  }
}

export default App;
