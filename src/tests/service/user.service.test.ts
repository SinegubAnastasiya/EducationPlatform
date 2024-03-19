import { createUser } from '../../service/user.service';
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
});
