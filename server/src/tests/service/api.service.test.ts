import { userReg, userAuth } from '../../service/api.service';
import * as apiRepository from '../../repository/api.repository';
import bcrypt from 'bcrypt';

describe('Test userReg', () => {
  test('Get success on registration', async () => {
    const mock_1 = jest.spyOn(apiRepository, 'findUserByEmailDB');
    const mock_2 = jest.spyOn(bcrypt, 'hash');
    const mock_3 = jest.spyOn(apiRepository, 'userRegDB');

    mock_1.mockResolvedValue([]);
    mock_2.mockResolvedValue('ngfjkjvglffkm3mkfgdmfgskl');
    mock_3.mockResolvedValue([{ id: 1, name: 'test1', surname: 'test1', email: 'test1@gmail.com', pwd: 'ngfjkjvglffkm3mkfgdmfgskl' }]);

    const res = await userReg('test1', 'test1', 'test1@gmail.com', '12345678');

    expect(mock_1).toHaveBeenCalled();
    expect(mock_2).toHaveBeenCalled();
    expect(mock_3).toHaveBeenCalled();

    expect(mock_1).toHaveBeenCalledWith('test1@gmail.com');
    expect(mock_2).toHaveBeenCalledWith('12345678', 3);
    expect(mock_3).toHaveBeenCalledWith('test1', 'test1', 'test1@gmail.com', 'ngfjkjvglffkm3mkfgdmfgskl');

    expect(Array.isArray(res)).toBeTruthy();
    expect(res.length).toBeGreaterThanOrEqual(1);
    expect(res).toHaveLength(1);
    expect(res).toEqual([{ id: 1, name: 'test1', surname: 'test1', email: 'test1@gmail.com', pwd: 'ngfjkjvglffkm3mkfgdmfgskl' }]);
  });

  test('Get error on such user already exists', async () => {
    const mock = jest.spyOn(apiRepository, 'findUserByEmailDB');

    try {
      mock.mockResolvedValue([{ id: 1, name: 'test1', surname: 'test1', email: 'test1@gmail.com', pwd: 'ngfjkjvglffkm3mkfgdmfgskl' }]);

      await userReg('test1', 'test1', 'test1@gmail.com', '12345678');
    } catch (error: any) {
      expect(mock).toHaveBeenCalled();
      expect(mock).toHaveBeenCalledWith('test1@gmail.com');
      expect(error.message).toBe('Such user already exists');
    }
  });

  test('Get error on data is not saved', async () => {
    const mock_1 = jest.spyOn(apiRepository, 'findUserByEmailDB');
    const mock_2 = jest.spyOn(bcrypt, 'hash');
    const mock_3 = jest.spyOn(apiRepository, 'userRegDB');

    try {
      mock_1.mockResolvedValue([]);
      mock_2.mockResolvedValue('ngfjkjvglffkm3mkfgdmfgskl');
      mock_3.mockResolvedValue([]);

      await userReg('test1', 'test1', 'test1@gmail.com', '12345678');
    } catch (error: any) {
      expect(mock_1).toHaveBeenCalled();
      expect(mock_2).toHaveBeenCalled();
      expect(mock_3).toHaveBeenCalled();

      expect(error.message).toBe('Data is not saved');
    }
  });
});

describe('Test userAuth', () => {
  test('Get success on authorization', async () => {
    const mock_1 = jest.spyOn(apiRepository, 'findUserByEmailDB');
    const mock_2 = jest.spyOn(bcrypt, 'compare');

    mock_1.mockResolvedValue([{ id: 1, name: 'test1', surname: 'test1', email: 'test1@gmail.com', pwd: 'ngfjkjvglffkm3mkfgdmfgskl' }]);
    mock_2.mockResolvedValue(true);

    const res = await userAuth('test1@gmail.com', '12345678');

    expect(mock_1).toHaveBeenCalled();
    expect(mock_2).toHaveBeenCalled();

    expect(mock_1).toHaveBeenCalledWith('test1@gmail.com');
    expect(mock_2).toHaveBeenCalledWith('12345678', 'ngfjkjvglffkm3mkfgdmfgskl');

    expect(res.length).toBeGreaterThanOrEqual(1);
    expect(res).toHaveLength(1);
    expect(res).toEqual([{ id: 1, name: 'test1', surname: 'test1', email: 'test1@gmail.com', pwd: 'ngfjkjvglffkm3mkfgdmfgskl' }]);
  });

  test('Get error on wrong email or password', async () => {
    const mock = jest.spyOn(apiRepository, 'findUserByEmailDB');

    try {
      mock.mockResolvedValue([]);

      await userAuth('test1@gmail.com', '12345678');
    } catch (error: any) {
      expect(mock).toHaveBeenCalled();
      expect(mock).toHaveBeenCalledWith('test1@gmail.com');
      expect(error.message).toBe('Wrong email or password');
    }
  });

  test('Get error on wrong email or password _ 2', async () => {
    const mock_1 = jest.spyOn(apiRepository, 'findUserByEmailDB');
    const mock_2 = jest.spyOn(bcrypt, 'compare');

    try {
      mock_1.mockResolvedValue([{ id: 1, name: 'test1', surname: 'test1', email: 'test1@gmail.com', pwd: 'ngfjkjvglffkm3mkfgdmfgskl' }]);
      mock_2.mockResolvedValue(false);

      await userAuth('test1@gmail.com', '12345678');
    } catch (error: any) {
      expect(mock_1).toHaveBeenCalled();
      expect(mock_2).toHaveBeenCalled();

      expect(mock_1).toHaveBeenCalledWith('test1@gmail.com');
      expect(mock_2).toHaveBeenCalledWith('12345678', 'ngfjkjvglffkm3mkfgdmfgskl');

      expect(error.message).toBe('Wrong email or password');
    }
  });
});
