'use strict';
const Customers = (sequelize, DataTypes) =>
    sequelize.define("customers", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })


module.exports = Customers;