const { contextBridge, ipcRenderer } = require("electron");
contextBridge.exposeInMainWorld("api", {
  close: () => ipcRenderer.send("close-app"),
  transfalse: () => ipcRenderer.send("change-transp"),
  transtrue: () => ipcRenderer.send("change-old-transp"),
  fullscreen: () => ipcRenderer.send("change-full"),
});
