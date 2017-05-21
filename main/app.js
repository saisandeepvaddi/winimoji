const electron = require("electron");
const { app, globalShortcut, Menu, Tray } = electron;
const path = require("path");
const window = require("./window");
const trayMenu = require("./trayMenu");

const accelerator = "CommandOrControl+Shift+E";
let tray = null;

app.on("ready", () => {
  let win = window.createWindow();
  tray = new Tray(path.resolve(__dirname, "..", "icons", "icon.png"));
  tray.setToolTip("Winimoji");
  tray.setContextMenu(trayMenu);
  const ret = globalShortcut.register(accelerator, () => {
    console.log("Emoji Copied");
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

app.on("will-quit", function() {
  globalShortcut.unregisterAll();
});

module.exports = app;
