const electron = require("electron");
const { app, globalShortcut } = electron;
const path = require("path");
const window = require("./window");

app.on("ready", () => {
  let win = window.createWindow();
  const ret = globalShortcut.register("CommandOrControl+Shift+E", () => {
    console.log("CommandOrControl+Shift+E is pressed");
    if (!win.isVisible()) {
      win.show();
    } else {
      win.hide();
    }
  });

  if (!ret) {
    console.log("registration failed");
  }
});

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
