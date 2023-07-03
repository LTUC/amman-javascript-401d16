'use strict';

const events = require('../eventspool');

events.on('light', armsMoving);
function armsMoving(payload) {
    if (payload.brightness >= 90) {
        console.log('moving arms .....');
    }
}

