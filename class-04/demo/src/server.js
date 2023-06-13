'use strict';
const express = require("express");
const app = express();
const peopleRouter = require('./routes/people.route');
const customersRouter = require('./routes/customers.route');
const ordersRouter = require('./routes/orders.route');

app.use(express.json());

app.use(peopleRouter);
app.use(customersRouter);
app.use(ordersRouter);

app.get('/', welcomeHandler);
function welcomeHandler(req, res) {
    res.status(200).send('hi');
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