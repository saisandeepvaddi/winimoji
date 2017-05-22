import React, { Component } from "react";
const electron = require("electron");
const { remote } = electron;
class CloseButton extends Component {
  closeWindow() {
    const win = remote.getCurrentWindow().close();
  }
  render() {
    return (
      <div id="close-button-div">
        <button
          id="close-button"
          onClick={this.closeWindow.bind(this)}
          className="delete is-small button is-danger"
        />
      </div>
    );
  }
}

export default CloseButton;
