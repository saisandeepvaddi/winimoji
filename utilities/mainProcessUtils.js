const electron = require("electron");
const { globalShortcut, session } = electron;
const settings = require("electron-settings");
const defaultAccelerator = "CommandOrControl+Shift+E";

exports.getExistingAccelerator = () => {
  if (settings.has("accelerator")) {
    console.log("Accelerator", settings.get("accelerator"));
    return settings.get("accelerator");
  } else {
    console.log("Accelerator: ", defaultAccelerator);
    return defaultAccelerator;
  }
};

exports.registerHotKey = (win, accelerator = this.getExistingAccelerator()) => {
  globalShortcut.register(accelerator, () => {
    settings.set("accelerator", accelerator);
    if (win !== null) {
      if (!win.isVisible()) {
        win.show();
      } else {
        win.hide();
      }
    }
  });
};
