'use strict';

const base64 = require("base-64");
const bcrypt = require('bcrypt');

const username = "shihab";
const password = "123";

let encoded = base64.encode(`${username}:${password}`);
console.log('encoded >>>>> ', encoded);

let decoded = base64.decode(encoded)
console.log('decoded >>>>> ', decoded);

// let p10 = '$2b$05$xJ0fXpsRP/FsjhJjVIAob.IbnANsAiPoaa9CMj7VxprTn7DvPIo6C';
// let mohanad = base64.decode(p10);
// console.log("mohanad ", mohanad);

let password2 = "abc@#";
async function encrypt(text) {
    console.log("text before anything ", text);
    let hashed = await bcrypt.hash(text, 15);

    console.log("text after hashing ", hashed);

    let p1 = '$2b$05$xJ0fXpsRP/FsjhJjVIAob.IbnANsAiPoaa9CMj7VxprTn7DvPIo6C';
    let p2 = '$2b$05$r911ku8OkVdjVXGXk4q1N.ZtIQSpdPLd.xB2w6csb6sw/0DhSZ276';

    let isValid1 = await bcrypt.compare(text, p1);
    let isValid2 = await bcrypt.compare(text, p2);


    let p3 = '$2b$05$r911ku8OkVdjVXGXk4q1N.ZtIQSpdPLd.xB2w6csb6sw/0DhSZ27A';
    let isValid3 = await bcrypt.compare(text, p3);

    console.log(isValid1)//true
    console.log(isValid2)//true
    console.log(isValid3)//false

}

encrypt(password2);

