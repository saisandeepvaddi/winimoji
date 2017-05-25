const electron = require("electron");
const { BrowserWindow } = electron;
const url = require("url");
const path = require("path");

exports.hotkeyWindow;
exports.createHotkeyWindow = () => {
  this.hotkeyWindow = new BrowserWindow({
    width: 500,
    height: 100,
    frame: false,
    show: false,
    resizable: false
  });

  this.hotkeyWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "..", "renderer", "hotkey.html"),
      protocol: "file:",
      slashes: true
    })
  );
//   this.hotkeyWindow.openDevTools();
  this.hotkeyWindow.on("closed", function() {
    this.hotkeyWindow = null;
  });
  return this.hotkeyWindow;
};
