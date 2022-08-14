const app = require('../src/server/index') 
const request = require('supertest')


describe('app should be defined', ()=>{
    test('app should be defined',  () => {
        expect(app).toBeDefined
    });
});
