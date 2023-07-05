'use strict';
require('dotenv').config();
const port = process.env.PORT || 3030;
const socket = require('socket.io');
const ioServer = socket(port);
ioServer.on('connection', (newSocket) => {
    // console.log(newSocket)
    console.log('welcome to my server socket id: ', newSocket.id)
    setTimeout(() => {
        ioServer.emit('sayHi')
    }, 3000);
    newSocket.on('hiFromClient', (payload) => {
        console.log(`the client said hi id:${newSocket.id}`);
    })

    newSocket.on('bye', () => {
        console.log('client said bye');
        newSocket.disconnect();
    })
});

