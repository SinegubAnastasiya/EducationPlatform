import pool from '../db';
import { iCourse } from '../interfaces';

async function createCoursesDB(course: string, description: string): Promise<iCourse[]> {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const sql: string = 'INSERT INTO courses(course, description) VALUES ($1, $2) RETURNING *';
    const { rows } = await client.query(sql, [course, description]);

    await client.query('COMMIT');

    return rows;
  } catch (error: any) {
    await client.query('ROLLBACK');
    console.log(error.message);

    return [];
  } finally {
    client.release();
  }
}

async function getAllCoursesDB(): Promise<iCourse[]> {
  const client = await pool.connect();

  const sql: string = 'SELECT * FROM courses ORDER BY id ASC';
  const { rows } = await client.query(sql);
  return rows;
}

async function getCourseByIdDB(id: number): Promise<iCourse[]> {
  const client = await pool.connect();
  const sql: string = 'SELECT * FROM courses WHERE id = $1';
  const { rows } = await client.query(sql, [id]);
  return rows;
}

async function updateCoursesDB(id: number, course: string, description: string): Promise<iCourse[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const sql: string = 'UPDATE courses SET course = $1, description = $2 WHERE id = $3 RETURNING *';
    const { rows } = await client.query(sql, [course, description, id]);

    await client.query('COMMIT');

    return rows;
  } catch (error: any) {
    await client.query('ROLLBACK');
    return [];
  } finally {
    client.release();
  }
}

async function deleteCoursesDB(id: number): Promise<iCourse[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const sql: string = 'DELETE FROM courses WHERE id = $1 RETURNING *';
    const { rows } = await client.query(sql, [id]);

    await client.query('COMMIT');

    return rows;
  } catch (error: any) {
    await client.query('ROLLBACK');
    return [];
  } finally {
    client.release();
  }
}

export { createCoursesDB, getAllCoursesDB, updateCoursesDB, deleteCoursesDB, getCourseByIdDB };
