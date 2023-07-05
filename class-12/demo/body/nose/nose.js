'use strict';
require('dotenv').config();
const port = process.env.PORT || 3030;
const io = require('socket.io-client');
let host = `http://localhost:${port}/health-system`;
const healthConnection = io.connect(host);

healthConnection.on('flu-waring', (payload) => {
    console.log('running nose ', payload);
})
healthConnection.on('brightness', handleBrightness);

function handleBrightness(payload) {
    if (payload.brightness >= 75) {
        console.log('close your eyes');
    }
}