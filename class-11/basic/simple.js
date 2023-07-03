'use strict';

const Events = require('events');

const eventsPool = new Events();

// eventsPool.on
// eventsPool.emit
// eventsPool.once

eventsPool.on('hi', hiEventHandler);
eventsPool.on('hi', hiEventHandler2);



function hiEventHandler(payload) {
    console.log(`hi from ${payload}`);
    // console.log(`Hi my name is ${payload.name} i'm ${payload.age} years old and my grade is ${payload.grade}%`);
}

function hiEventHandler2(payload) {
    console.log('mohahanad')
}

eventsPool.emit('hi', 'shihab');
// eventsPool.emit('hi', 'abuessa');
// eventsPool.emit('hi', {
//     name: "laila",
//     age: 22,
//     grade: 89
// });

let counter = 0;
eventsPool.once('increment', counterHandler);
function counterHandler() {
    counter++;
    console.log('counter', counter);
}

eventsPool.emit('increment');
eventsPool.emit('increment');
eventsPool.emit('increment');
eventsPool.emit('increment');

eventsPool.on('delete', (data) => {
    sendEmail({
        to: "admin@yourdomain.com",
        subject: "something deleted",
        body: `Record id ${data} was removed`,
    });
})

let SQL = `delete from table_name where id = $1;`;
let values = [req.query.id];
client.query(SQL, values).then((result) => {
    eventsPool.emit('delete', req.query.id);
    res.send('record deleted');
})