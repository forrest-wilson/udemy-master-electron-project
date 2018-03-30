const {app} = require("electron")
const mainWindow = require("./mainWindow")

// Enables Electron-Reload
require("electron-reload")(__dirname)

// Called when electron has finished initialization and
// is ready to create browser windows
app.on("ready", mainWindow.createWindow)

// Quit when all windows are closed
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit()
})

// Checks to see whether an instance of electron is running
app.on("activate", () => {
    if (mainWindow === null) mainWindow.createWindow()
})