import { createCoursesDB, deleteCoursesDB, getAllCoursesDB, getCourseByIdDB, updateCoursesDB } from '../../repository/course.repository';

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

describe('Test createCoursesDB', function () {
  test('Get success on creating users', async function () {
    client.query.mockResolvedValue({ rows: [{ id: 1, course: 'course1', description: 'description1' }] });

    const result = await createCoursesDB('course1', 'description1');

    expect(result).toEqual([{ id: 1, course: 'course1', description: 'description1' }]);
    expect(result.length).toBe(1);
    expect(client.query).toHaveBeenCalled();
  });
});

describe('Test getAllCoursesDB', () => {
  test('Get success on getting courses', async () => {
    client.query.mockResolvedValue({
      rows: [
        { id: 1, course: 'course1', description: 'description1' },
        { id: 2, course: 'course2', description: 'description2' },
      ],
    });

    const result = await getAllCoursesDB();

    expect(client.query).toHaveBeenCalled();
    expect(client.query).toHaveBeenCalledWith('SELECT * FROM courses ORDER BY id ASC');

    expect(result).toEqual([
      { id: 1, course: 'course1', description: 'description1' },
      { id: 2, course: 'course2', description: 'description2' },
    ]);
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
});

describe('Test getCourseByIdDB', () => {
  test('Get success on getting course by id', async () => {
    client.query.mockResolvedValue({ rows: [{ id: 1, course: 'course1', description: 'description1' }] });

    const result = await getCourseByIdDB(1);

    expect(client.query).toHaveBeenCalled();

    expect(result).toEqual([{ id: 1, course: 'course1', description: 'description1' }]);
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
});

describe('Test updateCoursesDB', () => {
  test('Get success on updating course by id', async () => {
    client.query.mockResolvedValue({ rows: [{ id: 1, course: 'course_1', description: 'description_1' }] });

    const result = await updateCoursesDB(1, 'course_1', 'description_1');

    expect(client.query).toHaveBeenCalled();

    expect(result).toEqual([{ id: 1, course: 'course_1', description: 'description_1' }]);
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
});

describe('Test deleteCoursesDB', () => {
  test('Get success on deleting course by id', async () => {
    client.query.mockResolvedValue({ rows: [{ id: 2, course: 'course2', description: 'description2' }] });

    const result = await deleteCoursesDB(2);

    expect(client.query).toHaveBeenCalled();

    expect(result).toEqual([{ id: 2, course: 'course2', description: 'description2' }]);
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
});
