const { app, BrowserWindow } = require("electron");

let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 300 });
  win.loadURL("http://localhost:3000");
}

app.on("ready", createWindow);
