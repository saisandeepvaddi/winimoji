const electron = require("electron");
const {
  Menu
} = electron;
const hotkeyWindow = require("./hotkeyWindow");

const menu = Menu.buildFromTemplate([{
    label: "Change HotKey",
    click: function () {
      const win = hotkeyWindow.createHotkeyWindow();
      win.show();
    }
  },
  {
    role: "quit"
  }
]);

module.exports = menu;