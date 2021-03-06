const {app, ipcMain} = require("electron")
const mainWindow = require("./mainWindow")
const readItem = require("./readItem")

// Enables Electron-Reload
require("electron-reload")(__dirname)

ipcMain.on("new-item", (e, itemURL) => {
    // Get read item with readItem module
    readItem(itemURL, (item) => {
        // Send to renderer
        e.sender.send("new-item-success", item)
    })
})

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