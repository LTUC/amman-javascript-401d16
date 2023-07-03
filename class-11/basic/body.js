'use strict';

const Events = require('events');
const eventsPool = new Events();

eventsPool.on('light', eyesLid);
eventsPool.on('light', armsMoving);

function eyesLid() {
    console.log('eyesLid closing..... ');
}

function armsMoving(payload) {
    console.log(`the brightness is ${payload.brightness} arms moving to hide the eyes`);
}



eventsPool.emit('light', { brightness: 75 });