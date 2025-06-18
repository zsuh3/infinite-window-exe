const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

let windowCount = 0;

function createWindow() {
    // Get available work area size
    const { width: sw, height: sh } = screen.getPrimaryDisplay().workAreaSize;
    const winWidth = 1024;
    const winHeight = 800;

    // Choose a random x/y so the window stays fully on-screen
    const x = Math.floor(Math.random() * (sw - winWidth));
    const y = Math.floor(Math.random() * (sh - winHeight));

    const win = new BrowserWindow({
        x, y,
        width: winWidth,
        height: winHeight,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true
        }
    });

    // Track this new window
    windowCount++;
    win.on('closed', () => {
        windowCount--;
    });


    win.loadFile(path.join(__dirname, 'index.html'));

    win.on('close', e => {
        e.preventDefault();

        // Capture the current total before we destroy this one
        const originalTotal = windowCount;

        // Hide it immediately so it doesn’t flash
        win.hide();

        // Spawn (originalTotal + 1) new windows so total becomes 2×originalTotal
        for (let i = 0; i < originalTotal + 1; i++) {
            createWindow();
        }

        // Only now destroy the original
        win.destroy();
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    // Quit the app when all windows are gone
    app.quit();
});
