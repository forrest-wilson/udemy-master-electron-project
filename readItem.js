// Modules
const {BrowserWindow} = require("electron")

// BrowserWindow
let bgItemWin

module.exports = (url, callback) => {
    bgItemWin = new BrowserWindow({
        width: 1000,
        height: 1000,
        show: false,
        webPreferences: {
            offscreen: true
        }
    })

    // Load read item
    bgItemWin.loadURL(url)

    // Wait for page to finish loading
    bgItemWin.webContents.on("did-finish-load", () => {
        // Get screenshot (thumbnail)
        bgItemWin.webContents.capturePage((image) => {
            // Get image as dataURI
            let screenshot = image.toDataURL()

            // Get page title
            let title = bgItemWin.getTitle()

            // Return the new item via callback
            callback({title, screenshot, url})

            // Clean up
            bgItemWin.close()
            bgItemWin = null
        })
    })
}