const { app, BrowserWindow } = require('electron');
const path = require('path');

let windowCount = 0;

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 800,
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


    win.loadFile('index.html');

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
