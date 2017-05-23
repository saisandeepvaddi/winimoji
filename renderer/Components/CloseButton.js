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
          id="close-button"
          onClick={this.closeWindow.bind(this)}
          className="delete is-small button is-danger"
        />
    );
  }
}

export default CloseButton;
