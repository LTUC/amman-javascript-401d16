'use strict';
const io = require('socket.io')(3000);
const uuid = require('uuid').v4;
const family = io.of('/family');
const msgQueue = {
    tasks: {

    }
}
// msgQueue = {
//     tasks: {
//         "424dfefefvij": "clean your room",
//         "415ghyfeavbt": "eat your food"
//     }
// }

family.on('connection', (socket) => {

    console.log('connected', socket.id);

    socket.on('new_task', (payload) => {
        console.log('i got your message')
        const id = uuid();
        msgQueue.tasks[id] = payload;
        socket.emit('added', payload);
        family.emit('task', {
            id: id,
            payload: msgQueue.tasks[id]
        })
    });
    socket.on('get_all', () => {
        // Object.keys(msgQueue.tasks) >>> ['424dfefefvij','415ghyfeavbt']
        console.log('msgQueue v1', msgQueue)
        Object.keys(msgQueue.tasks).forEach((id) => {
            socket.emit('task', {
                id: id,
                payload: msgQueue.tasks[id]
            })
        })
    });

    socket.on('received', (task) => {
        //delete the task from the msgQueue
        delete msgQueue.tasks[task.id];
        console.log('msgQueue v2', msgQueue)
    })

});