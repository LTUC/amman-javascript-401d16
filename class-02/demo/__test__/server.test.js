'use strict';
const server = require('../src/server');
const supertest = require("supertest");
const request = supertest(server.app);

describe("API Server ", () => {
    it("getting data from home route /", async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual("hello from home route");
    });
    it("handle 404 error", async () => {
        const response = await request.get('/abd');
        expect(response.status).toEqual(404);
    });
    test("handle server error", async () => {
        const response = await request.get('/bad');
        expect(response.status).toEqual(500);
    });
    it("testing /data", async () => {
        const response = await request.get('/data');
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual("object");
    })
});
