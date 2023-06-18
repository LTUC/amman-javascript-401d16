'use strict';
require('dotenv').config();
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.DATABASE_URL;
const sequelize = new Sequelize(POSTGRES_URI, {});
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


const users = sequelize.define('users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})
app.get('/', (req, res) => {
    res.status(200).send("hello ");
})
app.post('/signup', async (req, res) => {
    let username = req.body.username;
    let hashedPassword = await bcrypt.hash(req.body.password, 5);
    const record = await users.create({
        username: username,
        password: hashedPassword
    });
    res.status(201).json(record);
});

app.get('/signin', async (req, res) => {
    // console.log('headers authorization ', req.headers.authorization);
    // Basic c2hpaGFiOjEyMw==
    if (req.headers.authorization) {
        let headersParts = req.headers.authorization.split(" ");// ['Basic','c2hpaGFiOjEyMw==']
        // let encodedValue = headersParts[1];
        let encodedValue = headersParts.pop();
        let decodedValue = base64.decode(encodedValue);//username:password
        let [username, password] = decodedValue.split(":");
        const user = await users.findOne({ where: { username: username } })
        // console.log('user from DB ', user);
        const validUser = await bcrypt.compare(password, user.password);
        if (validUser) {
            res.status(200).json({ user });
        } else {
            res.status(500).send("wrong username or password");
        }

    } else {
        console.log('no user name or password')
    }
});

sequelize.sync()
    .then(() => {
        app.listen(3000, () => {
            console.log("i'm running ");
        })
    })