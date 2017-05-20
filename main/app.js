const electron = require("electron");
const { app } = electron;
const path = require("path");
const window = require("./window");

app.on("ready", window.createWindow);

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (mainWindow === null) {
    window.createWindow();
  }
});

module.exports = app;
