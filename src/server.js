// Importing Stuff
const { app, BrowserWindow } = require('electron')
const { join } = require('path')

// Turning on the "Application"
app.on("ready", createWindow) // This will create the window of the "index.html" file!

app.on("activate", () => { // This event is triggered when the app is launched (or relaunched)
    if(BrowserWindow.getAllWindows().length) createWindow() // This will create a window IF AND ONLY IF no other window is opened.
})

app.on("window-all-closed", () => { // This event will trigger when all the windows are closed.
    console.log("App Exited by the user!") // Logs that the app has been exited by the user.
    app.quit() // This will quit the application from the console!
})

// Creating the window itself.
function createWindow() { // This function will create the window which we talked about on line 9.
    let mainWindow = new BrowserWindow({ // A new variable config of the "BrowserWindow" element of electron.
        width: 700, // Width of the browser window.
        height: 350, // Height of the browser window.
        resizable: false, // Makes the window non resizable.
        titleBarStyle: "hidden", // Hides the title bar.
        webPreferences: {
            nodeIntegration: true // Enables Node Integration
        },
        autoHideMenuBar: true, // Hides the menu bar.
        center: true // Makes the app, when turned on, shows on the center of the screen.
    })

    mainWindow.loadURL(`file:///${join(__dirname, "./public/index.html")}`) // Loads the "index.html" file in a browser with the configs above.
}