/*
 * Copyright (C) 2017. All Rights Reserved.
 *
 * @author  Zhen Gong
 * @email   gongzhen1027@hotmail.com
 * @date    2017/11/17
 */

'use strict';

const electron = require('electron');
const {app, BrowserWindow, Menu, ipcMain, ipcRenderer} = electron;


let isDevelopment = true;

if (isDevelopment) {
    require('electron-reload')(__dirname, {
        ignored: /node_modules|[\/\\]\./
    });
}


var mainWnd = null;

function createMainWnd() {
    console.log('createwindow');

    mainWnd = new BrowserWindow({
        width: 800,
        height: 600,
        icon: 'public/img/app-icon.png'
    });

    if (isDevelopment) {
        mainWnd.webContents.openDevTools();
    }

    mainWnd.loadURL(`file://${__dirname}/index.html`);

    mainWnd.on('closed', () => {
       mainWnd = null;
       console.log('closed');
    });
}


app.on('ready', createMainWnd);

app.on('window-all-closed', () => {
    app.quit();
});