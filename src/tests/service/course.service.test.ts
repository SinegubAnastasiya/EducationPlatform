import { getAllCourses, createCourses, updateCourses, deleteCourses } from '../../service/course.service';
import * as repository from '../../repository/course.repository';

describe('test getAllCourses', () => {
  test('Get success all data', async () => {
    const mock = jest.spyOn(repository, 'getAllCoursesDB');
    mock.mockResolvedValue([
      { id: 1, course: 'test1', description: 'test1' },
      { id: 2, course: 'test2', description: 'test2' },
    ]);

    const res = await getAllCourses();

    expect(mock).toHaveBeenCalled();
    expect(res).toEqual([
      { id: 1, course: 'test1', description: 'test1' },
      { id: 2, course: 'test2', description: 'test2' },
    ]);
    expect(res).toHaveLength(2);
    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  test('Get error', async () => {
    const mock = jest.spyOn(repository, 'getAllCoursesDB');
    mock.mockResolvedValue([]);
    try {
      await getAllCourses();
    } catch (error: any) {
      expect(mock).toHaveBeenCalled();
      expect(error.message).toBe('Array is empty');
    }
  });
});

describe('test createCourses', () => {
  test('Get success created courses', async () => {
    const mock = jest.spyOn(repository, 'createCoursesDB');
    mock.mockResolvedValue([{ id: 1, course: 'test1', description: 'test1' }]);

    const res = await createCourses('test1', 'test1');

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith('test1', 'test1');

    expect(res).toEqual([{ id: 1, course: 'test1', description: 'test1' }]);
    expect(res).toHaveLength(1);
    expect(res[0].course).toBe('test1');
    expect(res[0].description).toBe('test1');
  });

  test('Get error', async () => {
    const mock = jest.spyOn(repository, 'createCoursesDB');
    mock.mockResolvedValue([]);
    try {
      await createCourses('test1', 'test1');
    } catch (error: any) {
      expect(mock).toHaveBeenCalled();
      expect(error.message).toBe('The database does not created');
    }
  });
});

describe('test updateCourses', () => {
  test('Get success update', async () => {
    const mock = jest.spyOn(repository, 'updateCoursesDB');
    mock.mockResolvedValue([{ id: 1, course: 'updated', description: 'updated' }]);

    const res = await updateCourses(1, 'updated', 'updated');

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith(1, 'updated', 'updated');

    expect(res).toEqual([{ id: 1, course: 'updated', description: 'updated' }]);
    expect(res).toHaveLength(1);
    expect(res.length).toBeGreaterThanOrEqual(0);
    expect(res[0].course).toBe('updated');
    expect(res[0].description).toBe('updated');
  });

  test('Get error', async () => {
    const mock = jest.spyOn(repository, 'updateCoursesDB');
    mock.mockResolvedValue([]);
    try {
      await updateCourses(1, 'updated', 'uodated');
    } catch (error: any) {
      expect(mock).toHaveBeenCalled();
      expect(error.message).toBe('Data is not saved');
    }
  });
});

describe('test deleteCourses', () => {
  test('Get success delete', async () => {
    const mock = jest.spyOn(repository, 'deleteCoursesDB');
    mock.mockResolvedValue([{ id: 1, course: 'test1', description: 'test1' }]);

    const res = await deleteCourses(1);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith(1);

    expect(res).toEqual([{ id: 1, course: 'test1', description: 'test1' }]);
    expect(res).toHaveLength(1);
    expect(res.length).toBeGreaterThanOrEqual(0);
    expect(res[0].id).toBe(1);
  });
});
