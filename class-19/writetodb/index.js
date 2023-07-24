'use strict';
const dynamoose = require('dynamoose');
const contactsSchema = new dynamoose.Schema({
    'id': String,
    'name': String,
    'phone': String,
});

const contctsModel = dynamoose.model('contacts', contactsSchema);

exports.handler = async (event) => {
    let { id, name, phone } = event.queryStringParameters;
    let newContact = { id, name, phone };
    let myResponse = {
        statusCode: null,
        body: null
    }
    try {
        let newFriend = await contctsModel.create(newContact);
        myResponse.statusCode = 200;
        myResponse.body = JSON.stringify(newFriend)
    }
    catch (error) {
        myResponse.statusCode = 500;
        myResponse.body = JSON.stringify(error.message);
    }

    return myResponse;

}