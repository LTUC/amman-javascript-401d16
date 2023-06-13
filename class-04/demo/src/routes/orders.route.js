const express = require('express');
const ordersRouter = express.Router();
const { OrderModel } = require('../models/index');
ordersRouter.get("/order", getAllOrders);
ordersRouter.get("/order/:id", getOneOrders);
ordersRouter.post("/order", createOrder);
ordersRouter.put("/order/:id", updateOrder);
ordersRouter.delete("/order/:id", deleteOrder);

async function getAllOrders(req, res) {
    let ordersResult = await OrderModel.read();
    res.status(200).json(ordersResult);
}

async function getOneOrders(req, res) {
    const OrderId = parseInt(req.params.id);
    let Order = await OrderModel.read(OrderId)
    res.status(200).json(Order);
}
async function createOrder(req, res) {
    let newOrder = req.body;
    let Order = await OrderModel.add(newOrder);
    res.status(201).json(Order);
}
async function updateOrder(req, res) {
    let OrderId = parseInt(req.params.id);
    let updateOrder = req.body;
    let updatedOrder = await foundOrder.update(updateOrder, OrderId);
    res.status(201).json(updatedOrder);
}
async function deleteOrder(req, res) {
    let OrderId = parseInt(req.params.id);
    let deleteOrder = await OrderModel.delete(OrderId);
    res.status(204).json(deleteOrder);
}

module.exports = ordersRouter;