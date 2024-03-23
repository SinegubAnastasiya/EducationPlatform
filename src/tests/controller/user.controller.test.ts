import supertest from 'supertest';
import { app } from '../../app';

let id;
describe('Test user POST', () => {
  test('Get success POST', async () => {
    const res = await supertest(app).post('/user/').send({ name: 'name10', surname: 'surname10', email: 'email10@gmail.com', pwd: 't67y8u9011' });
    id = res.body[0].id;
    expect(res.statusCode).toBe(200);
    expect(res.body[0].name).toBe('name10');
  });
});

describe('Test user GET', () => {
  test('Get success GET', async () => {
    const res = await supertest(app).get('/user/');

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);

    console.log(res.body);
  });
});

describe('Test user GET', () => {
  test('Get success GET', async () => {
    const res = await supertest(app).get(`/user/${id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);

    console.log(res.body);
  });
});

describe('Test user PUT', () => {
  test('Get success PUT', async () => {
    const res = await supertest(app).put(`/user/${id}`).send({ name: 'name_10', surname: 'surname_10', email: 'email11@gmail.com', pwd: 'tmwgfg43' });

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
    expect(res.body[0].name).toBe('name_10');
    expect(res.body[0].surname).toBe('surname_10');

    console.log(res.body);
  });
});

describe('Test user PATCH', () => {
  test('Get success PATCH', async () => {
    const res = await supertest(app).patch(`/user/${id}`).send({ name: 'name_11' });

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
    expect(res.body[0].name).toBe('name_11');

    console.log(res.body);
  });
});

describe('Test user DELETE', () => {
  test('Get success DELETE', async () => {
    const res = await supertest(app).delete(`/user/11`);

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);

    console.log(res.body);
  });
});
