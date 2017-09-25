import React, { Component } from "react";
const electron = require("electron");
const { BrowserWindow } = electron.remote;
class CloseButton extends Component {
  closeWindow() {
    console.log("Closing Window");
    BrowserWindow.getFocusedWindow().close();
  }
  render() {
    return (
      <button
        className="close-button no-select no-drag"
        onClick={this.closeWindow.bind(this)}
      >
        ✖
      </button>
    );
  }
}

export default CloseButton;
