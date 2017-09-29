const electron = require("electron");
const { BrowserWindow } = electron;
const url = require("url");
const path = require("path");

exports.hotkeyWindow;
exports.createHotkeyWindow = () => {
  this.hotkeyWindow = new BrowserWindow({
    width: 500,
    height: 150,
    maxWidth: 500,
    maxHeight: 150,
    minWidth: 500,
    minHeight: 150,
    frame: false,
    show: false,
    resizable: true,
    icon: path.resolve(__dirname, "..", "icons", "icon.png")
  });

  this.hotkeyWindow.loadURL(
    url.format({
      pathname: path.join(
        __dirname,
        "..",
        "renderer",
        "taskbar",
        "hotkey.html"
      ),
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
