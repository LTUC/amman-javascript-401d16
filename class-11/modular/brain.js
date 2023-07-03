'use strict';

const events = require('./eventspool');
require('./eyes/eyes.js');
require('./arms/arms.js');


// events.emit('light', { brightness: 35 });
// events.emit('light', { brightness: 80 });
// events.emit('light', { brightness: 95 });


events.on('light-detected', (payload) => {
    events.emit('light', { brightness: payload })
})