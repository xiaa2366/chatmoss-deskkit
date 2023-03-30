const { app, BrowserWindow } = require('electron')
const { menubar } = require('menubar');
const mb = menubar({
    icon: './images/newiconTemplate.png',
    browserWindow: {
        width: 1000,
        height: 700,
    }
});

mb.on('ready', () => {
    console.log('app is ready');
    // your app code here
});
