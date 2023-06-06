'use strict';

const express = require("express");
const app = express();

const stamper = require('./middlewares/stamper');
const logger = require('./middlewares/logger');
const getAgent = require('./middlewares/getAgent');
const square = require('./middlewares/square');

const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');

//global middlewares
// app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
    res.send("hello from home route");
});

app.get('/data', stamper, sendRes)

// app.get('/data', stamper, (req, res) => {
//     res.json({
//         id: 1,
//         name: "malek",
//         email: "malek@ltuc.com",
//         time: req.timeStamp,
//     });
// });
app.get('/bad', (req, res) => {
    let num = 10;
    let result = num.forEach((x) => {
        console.log(x);
    })
    res.send(result);
})

app.get('/test', (req, res) => {
    console.log('req', req);
    res.send('hello');
});

app.get('/test2', getAgent, (req, res) => {
    res.send({
        message: "test 2 route",
        name: req.myName,
        browser: req.browser,
    });
});

// app.get('/number', square(3), (req, res) => {
//     res.send(`The square is ${req.number}`);
// });

// app.get('/number/:id', square(), (req, res) => {
//     res.send(`The square is ${req.number}`);
// });

app.get('/number/:id', square, (req, res) => {
    res.send(`The square is ${req.number}`);
});

app.get('/throw-error', square('hi'), (req, res) => {
    res.send({
        number: req.number,
    });
});


app.use('*', notFoundHandler);
app.use(errorHandler)

function sendRes(req, res) {
    res.json({
        id: 1,
        name: "malek",
        email: "malek@ltuc.com",
        time: req.timeStamp,
    });
}


function start(port) {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    });
}

module.exports = {
    start: start,
    app: app,
}