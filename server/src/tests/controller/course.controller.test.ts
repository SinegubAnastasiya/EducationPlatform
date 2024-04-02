import supertest from 'supertest';
import { app } from '../../app';

let id: number;

describe('POST course', () => {
  test('Get success', async () => {
    const res = await supertest(app).post('/course/').send({ course: 'course2', description: 'descr2' });

    id = res.body[0].id;
    expect(res.statusCode).toBe(200);
    expect(res.body[0].course).toBe('course2');
    expect(res.body[0].description).toBe('descr2');
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });
});

describe('GET course', () => {
  test('Get success', async () => {
    const res = await supertest(app).get('/course');

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });
});

describe('GET course', () => {
  test('Get success', async () => {
    const res = await supertest(app).get(`/course/${id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });
});

describe('PUT course', () => {
  test('Get success', async () => {
    const res = await supertest(app).put(`/course/${id}`).send({ course: 'course6', description: 'descr6' });

    expect(res.statusCode).toBe(200);
    expect(res.body[0].course).toBe('course6');
    expect(res.body[0].description).toBe('descr6');
    expect(res.body.length).toBeGreaterThanOrEqual(1);

    console.log(res.body);
  });
});

describe('DELETE course', () => {
  test('Get success', async () => {
    const res = await supertest(app).delete(`/course/${id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body[0].course).toBe('course5');
    expect(res.body[0].description).toBe('descr5');
    expect(res.body.length).toBeGreaterThanOrEqual(1);

    console.log(res.body);
  });
});
