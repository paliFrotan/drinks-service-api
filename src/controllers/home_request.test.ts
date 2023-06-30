import request from 'supertest';
import { app } from '../app';
// ⚠️ This should error as "../app" doesn't exist yet!
describe('Test home API endpoint request', () => {
    test('GET should return correct message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Welcome to the Drinks API!');
        //expect(res.text).toEqual('This should fail!!');
    });
});

describe('Test coffeelover API endpoint request', () => {
    test('GET should return correct message', async () => {
        const res = await request(app).get('/coffeelover');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('I like coffee!');
    });
});

test('GET /coffee should return correct object', async () => {
    const res = await request(app)
    .get('/coffee')
    .query({ coffeeName: 'Latte' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
    drinkType: 'Coffee',
    name: 'Latte',
    });
});