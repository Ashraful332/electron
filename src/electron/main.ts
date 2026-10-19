import {app,BrowserWindow} from "electron";
import path from "path"; // for work on windows and linux both
import { isDev } from "./util.js";


// type test  = string;


app.on("ready",()=>{
    const mainWindow = new BrowserWindow({});
    if (isDev()) { // it not work
        mainWindow.loadFile(path.join( app.getAppPath() + '/out/index.html'));
    }else{ // Allwas it work
        mainWindow.loadURL('http://localhost:5123');
    }
});