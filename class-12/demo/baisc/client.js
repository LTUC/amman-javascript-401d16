'use strict';
require('dotenv').config();
const port = process.env.PORT || 3030;
const ioClient = require('socket.io-client');
let host = `http://localhost:${port}/`;
const socket = ioClient.connect(host);

socket.on('sayHi', (payload) => {
    setTimeout(() => {
        console.log('server said hi');
    }, 2000)
})

setTimeout(() => {
    socket.emit('hiFromClient');
}, 9000)



setTimeout(() => {
    socket.emit('bye');
}, 15000)