const electron = require("electron");
const { BrowserWindow } = electron;
const url = require("url");
const path = require("path");
exports.window;

exports.createWindow = () => {
  this.window = new BrowserWindow({ width: 800, height: 600 });

  this.window.loadURL(
    url.format({
      pathname: path.join(__dirname, "..", "renderer", "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  this.window.on("closed", function() {
    this.window = null;
  });
};
