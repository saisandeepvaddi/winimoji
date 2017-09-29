const electron = require("electron");
const { BrowserWindow } = electron;
const url = require("url");
const path = require("path");
exports.window;

exports.createWindow = () => {
  this.window = new BrowserWindow({
    width: 600,
    height: 450,
    minWidth: 600,
    minHeight: 450,
    maxWidth: 600,
    maxHeight: 450,
    maximizable: false,
    // frame: false,
    show: false,
    icon: path.resolve(__dirname, "..", "icons", "icon.png")
  });

  this.window.loadURL(
    url.format({
      pathname: path.join(__dirname, "..", "renderer", "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  this.window.setMenu(null);

  // this.window.openDevTools();

  this.window.on("closed", function() {
    this.window = null;
  });
  return this.window;
};
