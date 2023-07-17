'use strict';
// const AWS = require('aws-sdk');
// const s3 = new AWS.S3();

export const handler = async (event) => {
    const MyResponse = JSON.stringify(event);
    console.log('reading option is working ', MyResponse)
    //   // TODO implement
    //   const response = {
    //     statusCode: 200,
    //     body: JSON.stringify('Hello from Lambda!'),
    //   };
    return {
        statusCode: 200,
        body: `All is working \n ${MyResponse}`
    };
};
