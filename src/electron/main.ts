import { app, BrowserWindow } from "electron";
import path from "path"; // for work on windows and linux both
import { isDev } from "./util.js";
import { startServer } from "./server.js";


// type test  = string;


app.on("ready", async () => {
    await startServer();
    const mainWindow = new BrowserWindow({
        width: 1200,                  // Default width in pixels
        height: 800,                 // Default height in pixels
        minWidth: 1200,               // Minimum width constraint
        minHeight: 600,
    });
    if (isDev()) { // it not work
        mainWindow.loadURL('http://localhost:5123');
    } else { // Allwas it work
        mainWindow.loadFile(path.join(app.getAppPath() + '/out/index.html'));
    }
});