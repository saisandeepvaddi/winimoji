const electron = require("electron");
const { Menu } = electron;

const menu = Menu.buildFromTemplate([
  {
    role: "quit"
  }
]);

module.exports = menu;
