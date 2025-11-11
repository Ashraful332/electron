const { app, BrowserWindow } = require('electron')
const express = require('express');
const path = require('path');
const PORT = 36981;

// Create Express app
const api = express();
api.use(express.json());

// Simple route
api.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express inside Electron!' });
});

// Start Express on a random port
api.listen(PORT, () => {
  console.log(`✅ Express server running on http://localhost:${PORT}`);
});

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // ✅ Node.js allow in renderer
       contextIsolation: true,
    },
  })

  win.loadURL('http://localhost:6969');
  // win.loadFile('../dist/index.html');
}

app.whenReady().then(() => {
  createWindow()
})