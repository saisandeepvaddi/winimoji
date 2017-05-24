const electron = require("electron");
const { remote, ipcRenderer } = electron;

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
});

document.getElementById("close-button").addEventListener("click", function() {
  remote.BrowserWindow.getFocusedWindow().close();
});
