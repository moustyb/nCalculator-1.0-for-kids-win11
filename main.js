const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 360,
    height: 600,
    resizable: false,
    icon: path.join(__dirname, "assets/icon.png")
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
