'use strict';
require('dotenv').config();
const AWS = require('aws-sdk');
AWS.config.update({
    region: "us-east-1",
    apiVersion: "latest",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    accessSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
})

function sendMessage() {
    const messageParams = {
        Message: '2this is from vscode Fake discount',
        TopicArn: process.env.TOPIC,
    }
    const publishMsg = new AWS.SNS().publish(messageParams).promise();

    publishMsg.then((data) => {
        console.log(
            'published: ', data.MessageId
        )
    })
}

sendMessage();