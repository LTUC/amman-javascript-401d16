'use strict';
require('dotenv').config();
const port = process.env.PORT || 3030;

// const socket = require('socket.io');
// const ioServer = socket(port);
// or
const ioServer = require('socket.io')(port);

ioServer.on('connection', (socket) => {
    console.log('connected ', socket.id);
    // ioServer.emit('brightness', { brightness: 75 });

    socket.on('light', () => {
        setInterval(() => {
            let brightness = Math.ceil(Math.random() * 100);
            console.log('-------------------------------');
            console.log('Brightness Detected: ', brightness);
            ioServer.emit('brightness', { brightness: brightness });
        }, 3000)
    });
})


const healthSystem = ioServer.of('/health-system');

healthSystem.on('connection', (socket) => {
    console.log('connected to health system ', socket.id);
    healthSystem.emit('flu-waring', { temp: -3 })
});

