import React, { Component } from 'react';
const electron = require('electron');
const {remote} = electron;
class CloseButton extends Component {
    closeWindow() {
        const win = remote.getCurrentWindow().close();
    }
    render() {
        return (
            <div>
                <button onClick={this.closeWindow.bind(this)}>Close X</button>
            </div>
        );
    }
}

export default CloseButton;