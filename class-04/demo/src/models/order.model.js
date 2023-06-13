'use strict';
const Orders = (sequelize, DataTypes) =>
    sequelize.define("orders", {
        product: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })


module.exports = Orders;