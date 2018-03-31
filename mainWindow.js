// Modules
const {BrowserWindow} = require("electron")

// BrowserWindow Instance
exports.win

exports.createWindow = () => {
    this.win = new BrowserWindow({
        width: 500,
        height: 650,
        minWidth: 350,
        maxWidth: 650,
        minHeight: 310,
        icon: `${__dirname}/icons/64x64.png` // Icon for Linux distribution
    })
    
    // Load main window content
    this.win.loadURL(`file://${__dirname}/renderer/main.html`)

    // Handle window close event 
    this.win.on("closed", () => {
        this.win = null
    })
}