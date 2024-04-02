import { createUser, getAllUsers, getUserById, updateUserById, deleteUser, updateBody } from '../../service/user.service';
import * as userRepository from '../../repository/user.repository';

describe('Test createUser', () => {
  test('Get success on create new user', async () => {
    const mock = jest.spyOn(userRepository, 'createUserDB');
    mock.mockResolvedValue([{ id: 1, name: 'user1', surname: 'user1', email: 'test1@gmail.com', pwd: '12345456' }]);

    const res = await createUser('user1', 'user1', 'test1@gmail.com', '12345456');

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith('user1', 'user1', 'test1@gmail.com', '12345456');

    expect(res).toEqual([{ id: 1, name: 'user1', surname: 'user1', email: 'test1@gmail.com', pwd: '12345456' }]);
  });

  test('error not created data', async () => {
    const mock = jest.spyOn(userRepository, 'createUserDB');
    mock.mockResolvedValue([]);
    try {
      await createUser('Ivan', 'Ivanov', 'ivan@mail.ru', '123456789');
    } catch (error: any) {
      expect(mock).toHaveBeenCalled();
      expect(error.message).toBe('Data do not create');
    }
  });
});

describe('Test getAllUser', () => {
  test('Get success', async () => {
    const mock = jest.spyOn(userRepository, 'getAllUsersDB');
    mock.mockResolvedValue([
      { id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: '123456789' },
      { id: 2, name: 'Kate', surname: 'Petrova', email: 'kate98@mail.ru', pwd: '234567891' },
    ]);
    const result = await getAllUsers();

    expect(mock).toHaveBeenCalled();
    expect(result).toEqual([
      { id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: '123456789' },
      { id: 2, name: 'Kate', surname: 'Petrova', email: 'kate98@mail.ru', pwd: '234567891' },
    ]);
    expect(result.length).toBeGreaterThan(0);
  });

  test('error empty db', async () => {
    const mock = jest.spyOn(userRepository, 'getAllUsersDB');
    mock.mockResolvedValue([]);
    try {
      await getAllUsers();
    } catch (error: any) {
      expect(mock).toHaveBeenCalled();
      expect(error.message).toBe('DB is empty');
    }
  });
});

describe('Test getUserById', () => {
  test('Get success on getting user by id', async () => {
    const mock = jest.spyOn(userRepository, 'getUserByIdDB');
    mock.mockResolvedValue([{ id: 2, name: 'Kate', surname: 'Petrova', email: 'kate98@mail.ru', pwd: '234567891' }]);
    const result = await getUserById(2);
    expect(mock).toHaveBeenCalled();
    expect(result).toEqual([{ id: 2, name: 'Kate', surname: 'Petrova', email: 'kate98@mail.ru', pwd: '234567891' }]);
    expect(result).toHaveLength(1);
  });

  test('error id does not saved', async () => {
    const mock = jest.spyOn(userRepository, 'getUserByIdDB');
    mock.mockResolvedValue([]);
    try {
      await getUserById(2);
    } catch (error: any) {
      expect(mock).toHaveBeenCalled();
      expect(error.message).toBe('ID does not saved');
    }
  });
});

describe('Test updateUser', () => {
  test('Get success on updating user by id', async () => {
    const mock = jest.spyOn(userRepository, 'updateUserByIdDB');
    mock.mockResolvedValue([{ id: 1, name: 'Vlad', surname: 'Vladov', email: 'ivan@mail.ru', pwd: '123456789' }]);
    const result = await updateUserById(1, 'Vlad', 'Vladov', 'ivan@mail.ru', '123456789');

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith(1, 'Vlad', 'Vladov', 'ivan@mail.ru', '123456789');
    expect(result).toEqual([{ id: 1, name: 'Vlad', surname: 'Vladov', email: 'ivan@mail.ru', pwd: '123456789' }]);
    expect(result).toHaveLength(1);
  });

  test('error do not save data', async () => {
    const mock = jest.spyOn(userRepository, 'updateUserByIdDB');
    mock.mockResolvedValue([]);
    try {
      await updateUserById(1, 'Vlad', 'Vladov', 'ivan@mail.ru', '123456789');
    } catch (error: any) {
      expect(mock).toHaveBeenCalled();
      expect(error.message).toBe('Data is not saved');
    }
  });
});

describe('Test deleteUser', () => {
  test('Get success on deleting user', async () => {
    const mock = jest.spyOn(userRepository, 'deleteUserDB');
    mock.mockResolvedValue([{ id: 2, name: 'Kate', surname: 'Petrova', email: 'kate98@mail.ru', pwd: '234567891' }]);

    const result = await deleteUser(2);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith(2);
    expect(result).toEqual([{ id: 2, name: 'Kate', surname: 'Petrova', email: 'kate98@mail.ru', pwd: '234567891' }]);
    expect(result).toHaveLength(1);
  });

  test('id not found', async () => {
    const mock = jest.spyOn(userRepository, 'deleteUserDB');
    mock.mockResolvedValue([]);
    try {
      await deleteUser(2);
    } catch (error: any) {
      expect(mock).toHaveBeenCalled();
      expect(error.message).toBe('Id is not found');
    }
  });
});

describe('Test updateBody', () => {
  test('Get success', async () => {
    const mock = jest.spyOn(userRepository, 'updateBodyDB');
    mock.mockResolvedValue([{ id: 1, name: 'Vlad', surname: 'Vladov', email: 'vlad2002@mail.ru', pwd: '345678912' }]);

    const result = await updateBody(1, { email: 'vlad2002@mail.ru', pwd: '345678912' });

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith(1, { email: 'vlad2002@mail.ru', pwd: '345678912' });

    expect(result).toEqual([{ id: 1, name: 'Vlad', surname: 'Vladov', email: 'vlad2002@mail.ru', pwd: '345678912' }]);
    expect(result).toHaveLength(1);
  });

  test('do not change data', async () => {
    const mock = jest.spyOn(userRepository, 'updateBodyDB');
    mock.mockResolvedValue([]);
    try {
      await updateBody(1, { email: 'vlad2002@mail.ru', pwd: '345678912' });
    } catch (error: any) {
      expect(mock).toHaveBeenCalled();
      expect(error.message).toBe('Data is not changed');
    }
  });
});
