'use strict';

require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET_DATA;
const { sequelize, DataTypes } = require('./index');

const users = sequelize.define('users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        get() {
            const dataValue = this.getDataValue('username');
            return dataValue.toUpperCase();
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            const hash = bcrypt.hashSync(value, 5);
            this.setDataValue('password', hash);
        }
    },
    token: {
        type: DataTypes.VIRTUAL,
        get() {
            return jwt.sign({ username: this.username, password: this.password }, SECRET);
        }
    }
});

users.authBasic = async function (username, password) {
    const user = await users.findOne({ where: { username: username } });
    //select * from users where username = 'shihab'
    // console.log('user from DB ', user);
    const validUser = await bcrypt.compare(password, user.password);
    if (validUser) {
        // let newToken = jwt.sign({ username: user.username, password: user.password }, SECRET);
        // user.token = newToken;
        return user;
    } else {
        throw new Error("invalid user");
    }
}

users.authBearer = async function (token) {
    const parsedToken = jwt.verify(token, SECRET);
    console.log('**************', parsedToken)
    const user = await users.findOne({ where: { username: parsedToken.username } })
    if (user.username) {
        return user
    } else {
        throw new Error('invalid token');
    }
}


module.exports = users;