import { findUserByEmailDB, userRegDB } from '../../repository/api.repository';

const client = {
  query: jest.fn(),
  release: jest.fn(),
};

jest.mock('pg', function () {
  return {
    Pool: jest.fn(function () {
      return {
        connect: jest.fn(function () {
          return client;
        }),
      };
    }),
  };
});

describe('Test userRegDB', () => {
  test('Get success on registration', async () => {
    client.query.mockResolvedValue({ rows: [{ id: 1, name: 'name1', surname: 'surname_1', email: 'email_1@gmail.com', pwd: '12345656789' }] });

    const res = await userRegDB('name1', 'surname_1', 'email_1@gmail.com', '12345656789');

    expect(client.query).toHaveBeenCalled();

    expect(res).toEqual([{ id: 1, name: 'name1', surname: 'surname_1', email: 'email_1@gmail.com', pwd: '12345656789' }]);
    expect(res.length).toBe(1);
  });
});

describe('Test findUserDB', () => {
  test('Get success on authorization', async () => {
    client.query.mockResolvedValue({ rows: [{ id: 1, name: 'name1', surname: 'surname_1', email: 'email_1@gmail.com', pwd: '12345656789' }] });

    const res = await findUserByEmailDB('email_1@gmail.com');

    expect(client.query).toHaveBeenCalled();

    expect(res).toEqual([{ id: 1, name: 'name1', surname: 'surname_1', email: 'email_1@gmail.com', pwd: '12345656789' }]);
    expect(res.length).toBe(1);
  });
});
