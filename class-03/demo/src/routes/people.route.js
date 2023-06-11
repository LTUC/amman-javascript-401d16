const express = require('express');
const peopleRouter = express.Router();
const { People } = require('../models/index');
peopleRouter.get("/people", getPeople);
peopleRouter.get("/people/:id", getPerson);
peopleRouter.post("/people", createPerson);
peopleRouter.put("/people/:id", updatePerson);
peopleRouter.delete("/people/:id", deletePerson);
async function getPeople(req, res) {
    let peopleResult = await People.findAll();
    res.status(200).json(peopleResult);
}
async function getPerson(req, res) {
    const personId = parseInt(req.params.id);
    let person = await People.findOne({
        where: {
            id: personId
        }
    })
    res.status(200).json(person);
}
async function createPerson(req, res) {
    let newPerson = req.body;
    let person = await People.create(newPerson);
    res.status(201).json(person);
}
async function updatePerson(req, res) {
    let personId = parseInt(req.params.id);
    let updatePerson = req.body;
    let foundPerson = await People.findOne({ where: { id: personId } });
    let updatedPerson = await foundPerson.update(updatePerson);
    res.status(201).json(updatedPerson);
}
async function deletePerson(req, res) {
    let personId = parseInt(req.params.id);
    let deletePerson = await People.destroy({ where: { id: personId } });
    res.status(204).json(deletePerson);
}

module.exports = peopleRouter;