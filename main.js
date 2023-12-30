const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
require("electron-reload")(__dirname);

function createWindow() {
  const win = new BrowserWindow({
    width: 630,
    height: 200,
    frame: false,
    autoHideMenuBar: true,
    transparent: true,
    // titleBarStyle: "hidden",
    // titleBarOverlay: {
    //   color: "#2f3241",
    //   symbolColor: "#74b1be",
    // },

    alwaysOnTop: true,
    webPreferences: {
      preload: __dirname + "//scripts//preload.js",
    },
  });

  ipcMain.on("close-app", () => app.quit());

  ipcMain.on("change-transp", () => {
    const win = BrowserWindow.getAllWindows()[0];

    win.setBackgroundColor("#fff");
  });

  ipcMain.on("change-old-transp", () => {
    const win = BrowserWindow.getAllWindows()[0];

    console.log("Changing Color");
    //win.setOpacity(0.7); //0 to 1 value
    //win.close();
    win.setBackgroundColor("#00000000");
  });

  ipcMain.on("change-full", () => {
    const win = BrowserWindow.getAllWindows()[0];

    win.setFullScreen(true);
  });

  win.setAlwaysOnTop(true, "floating", 1);
  win.loadFile("./html/index.html");

  //win.webContents.openDevTools()
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
