import { createUserDB, deleteUserDB, getAllUsersDB, getUserByIdDB, updateBodyDB, updateUserByIdDB } from '../../repository/user.repository';

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

describe('Test createUserDB', () => {
  test('Get success on creating data', async () => {
    client.query.mockResolvedValue({ rows: [{ id: 1, name: 'name1', surname: 'surname1', email: 'email1@gmail.com', pwd: '1234565678' }] });

    const result = await createUserDB('name1', 'surname1', 'email1@.gmail.com', '1234565678');

    expect(client.query).toHaveBeenCalled();

    expect(result).toEqual([{ id: 1, name: 'name1', surname: 'surname1', email: 'email1@gmail.com', pwd: '1234565678' }]);
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
});

describe('Test getAllUsersDB', () => {
  test('Get success on getting users', async () => {
    client.query.mockResolvedValue({
      rows: [
        { id: 1, name: 'name1', surname: 'surname1', email: 'email1@gmail.com', pwd: '1234565678' },
        { id: 2, name: 'name2', surname: 'surname2', email: 'email2@gmail.com', pwd: '1234533678' },
      ],
    });

    const result = await getAllUsersDB();

    expect(client.query).toHaveBeenCalled();

    expect(result).toEqual([
      { id: 1, name: 'name1', surname: 'surname1', email: 'email1@gmail.com', pwd: '1234565678' },
      { id: 2, name: 'name2', surname: 'surname2', email: 'email2@gmail.com', pwd: '1234533678' },
    ]);
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
});

describe('Test getUserByIdDB', () => {
  test('Get success on getting user by id', async () => {
    client.query.mockResolvedValue({
      rows: [{ id: 1, name: 'name1', surname: 'surname1', email: 'email1@gmail.com', pwd: '1234565678' }],
    });

    const result = await getUserByIdDB(1);

    expect(client.query).toHaveBeenCalled();

    expect(result).toEqual([{ id: 1, name: 'name1', surname: 'surname1', email: 'email1@gmail.com', pwd: '1234565678' }]);
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
});

describe('Test updateUser', () => {
  test('Get success on updating user by id', async () => {
    client.query.mockResolvedValue({
      rows: [{ id: 1, name: 'name_1', surname: 'surname_1', email: 'email_1@gmail.com', pwd: '12345656789' }],
    });

    const result = await updateUserByIdDB(1, 'name_1', 'surname_1', 'email_1@gmail.com', '12345656789');

    expect(client.query).toHaveBeenCalled();

    expect(result).toEqual([{ id: 1, name: 'name_1', surname: 'surname_1', email: 'email_1@gmail.com', pwd: '12345656789' }]);
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
});

describe('Test deleteUser', () => {
  test('Get success on deletting user by id', async () => {
    client.query.mockResolvedValue({
      rows: [{ id: 1, name: 'name_1', surname: 'surname_1', email: 'email_1@gmail.com', pwd: '12345656789' }],
    });

    const result = await deleteUserDB(1);

    expect(client.query).toHaveBeenCalled();

    expect(result).toEqual([{ id: 1, name: 'name_1', surname: 'surname_1', email: 'email_1@gmail.com', pwd: '12345656789' }]);
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
});

describe('Test updateBodyDB', () => {
  test('Get success on updating part', async () => {
    client.query.mockResolvedValue({
      rows: [{ id: 1, name: 'name1', surname: 'surname_1', email: 'email_1@gmail.com', pwd: '12345656789' }],
    });

    const result = await updateBodyDB(1, { name: 'name1', surname: 'surname_1', email: 'email_1@gmail.com', pwd: '12345656789' });

    expect(client.query).toHaveBeenCalled();

    expect(result).toEqual([{ id: 1, name: 'name1', surname: 'surname_1', email: 'email_1@gmail.com', pwd: '12345656789' }]);
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
});
