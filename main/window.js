const electron = require("electron");
const { BrowserWindow } = electron;
const url = require("url");
const path = require("path");
exports.window;

exports.createWindow = () => {
  this.window = new BrowserWindow({
    width: 400,
    height: 300,
    frame: false,
    show: false
  });

  this.window.loadURL(
    url.format({
      pathname: path.join(__dirname, "..", "renderer", "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  // this.window.openDevTools();

  this.window.on("closed", function() {
    this.window = null;
  });
  return this.window;
};
