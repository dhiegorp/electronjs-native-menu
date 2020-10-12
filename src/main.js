const electron = require('electron')

const { app, BrowserWindow, Menu, globalShortcut } = electron;

let mainWindow;

app.on('ready', _ => {
    mainWindow = new BrowserWindow();

    const appName = electron.app.getName();

    globalShortcut.register('CommandOrControl+Q', _ => { app.quit() })

    const template = [{
        label: electron.app.getName(),
        submenu: [{
            label: 'About',
            click: _ => {
                console.log(`${appName}::About clicked`);
            }, role: 'about'
        },

        {
            type: 'separator'
        }, {
            label: 'Quit',
            click: _ => {
                app.quit();
            },
            accelerator: 'Ctrl+Q'
        }]
    }];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
})