'use strict';
require('dotenv').config();
const express = require('express');
const basic = require('./middlewares/basicAuth');
const bearer = require('./middlewares/bearerAuth');
const acl = require('./middlewares/acl');

const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());
const users = require('./models/users.model');

app.post('/signup', async (req, res) => {
    // let username = req.body.username;
    let hashedPassword = await bcrypt.hash(req.body.password, 5);
    const record = await users.create({
        username: req.body.username,
        password: hashedPassword,
        role: req.body.role,
    });
    res.status(201).json(record);
});


app.post('/signin', basic, loginHandler);

app.get('/myOrders', bearer, ordersHandler);



app.get('/img', bearer, acl('read'), imageHandler);
app.post('/img', bearer, acl('create'));
app.put('/img', bearer, acl('update'));
app.delete('/img', bearer, acl('delete'), imageDeleteHandler);

function loginHandler(req, res) {
    res.status(200).json(req.user);
}

function ordersHandler(req, res) {
    res.json({
        'message': 'you can view the orders',
        'user': req.user
    });
}

function imageHandler(req, res) {
    res.status(200).json('you have the access');
}
function imageDeleteHandler(req, res) {
    res.status(200).json('you have the access');
}
module.exports = app;