const electron = require("electron");
const { remote, ipcRenderer } = electron;
const settings = require("electron-settings");

remote.BrowserWindow
  .getFocusedWindow()
  .webContents.on("did-finish-load", function() {
    const accelerator = settings.get("accelerator").split("+");
    
    document.getElementById("modifier1").value = accelerator[0];
    document.getElementById("modifier2").value = accelerator[1];
    document.getElementById("key").value = accelerator[2];
  });

document.getElementById("hotkey_form").addEventListener("submit", function(e) {
  e.preventDefault();
  let modifier1 = document.getElementById("modifier1").value;
  let modifier2 = document.getElementById("modifier2").value;
  let key = document.getElementById("key").value;
  const newHotkey = {
    modifier1: modifier1,
    modifier2: modifier2,
    key: key
  };

  ipcRenderer.send("change-hotkey", newHotkey);
  document.getElementById("modifier1").value = modifier1;
    document.getElementById("modifier2").value = modifier2;
    document.getElementById("key").value = key;
});

document.getElementById("close-button").addEventListener("click", function() {
  remote.BrowserWindow.getFocusedWindow().close();
});
