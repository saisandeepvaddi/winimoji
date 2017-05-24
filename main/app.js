const electron = require("electron");
const { app, globalShortcut, Menu, Tray, ipcMain } = electron;
const path = require("path");
const window = require("./window");
const trayMenu = require("./trayMenu");
const { registerHotKey } = require("../utilities/mainProcessUtils");

let accelerator;
let tray = null;
let win;

ipcMain.on("change-hotkey", (event, arg) => {
  globalShortcut.unregisterAll();
  const newHotKey = `${arg.modifier1}+${arg.modifier2}+${arg.key}`;
  registerHotKey(win, newHotKey);
});

app.on("ready", () => {
  win = window.createWindow();
  tray = new Tray(path.resolve(__dirname, "..", "icons", "icon.png"));
  tray.setToolTip("Winimoji");
  tray.setContextMenu(trayMenu);
  registerHotKey(win);
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
