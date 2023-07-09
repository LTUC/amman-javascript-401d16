'use strict';

const client = require('socket.io-client');
const host = `http://localhost:3000/family`
const socket = client.connect(host);

// socket.emit('new_task', 'clean your room');
// socket.emit('new_task', 'eat your food');
// socket.emit('new_task', 'go to school');

// setInterval(() => {
//     socket.emit('new_task', 'clean your room');
// }, 4000)
// setInterval(() => {
//     socket.emit('new_task', 'eat your food');
// }, 4000)
// setInterval(() => {
//     socket.emit('new_task', 'go to school');
// }, 4000)

// const tasks = ['clean your room', 'eat your food', 'go to school'];

// tasks.forEach((task) => {
//     socket.emit('new_task', task);
// })

socket.on('added', (payload) => {
    console.log(`Thank you for adding : ${payload} to the msgQueue.`)
    // socket.disconnect();
})

// console.log('process.argv', process.argv)
// process.argv [
//     '/home/shihab/.nvm/versions/node/v16.15.1/bin/node',
//     '/home/shihab/ltuc/401/amman-javascript-401d16/class-13/demo/parent.js',
//     'clean your room',
//     'eat your food'
//   ]
const values = process.argv.splice(2);
// console.log('values from terminal ', values);
values.forEach((task) => {
    socket.emit('new_task', task);
})