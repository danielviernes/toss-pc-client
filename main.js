const { app, BrowserWindow } = require('electron')
const path = require('path')
//const find = require('local-devices')

let window;

function createWindow () {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'service.js')
    }
  })

  window.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

require('electron-reload')(__dirname,{
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})