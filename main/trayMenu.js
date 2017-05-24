const electron = require("electron");
const { Menu } = electron;
const hotkeyWindow = require("./hotkeyWindow");

const menu = Menu.buildFromTemplate([
  {
    role: "quit"
  },
  {
    label: "Change HotKey",
    click: function() {
      const win = hotkeyWindow.createHotkeyWindow();
      win.show();
    }
  }
]);

module.exports = menu;
