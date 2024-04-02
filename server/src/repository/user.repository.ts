import pool from '../db';
import { iUser } from '../interfaces';

async function createUserDB(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const sql: string = 'INSERT INTO users(name, surname, email, pwd) VALUES($1, $2, $3, $4) RETURNING *';
    const { rows } = await client.query(sql, [name, surname, email, pwd]);

    await client.query('COMMIT');

    return rows;
  } catch (error) {
    await client.query('ROLLBACK');
    return [];
  } finally {
    client.release();
  }
}

async function getAllUsersDB(): Promise<iUser[]> {
  const client = await pool.connect();
  const sql: string = 'SELECT * FROM users ORDER BY id ASC';
  const { rows } = await client.query(sql);
  return rows;
}

async function getUserByIdDB(id: number): Promise<iUser[]> {
  const client = await pool.connect();
  const sql: string = 'SELECT * FROM users WHERE id = $1';
  const { rows } = await client.query(sql, [id]);

  return rows;
}

async function updateUserByIdDB(id: number, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const sql: string = 'UPDATE users SET name = $1, surname = $2, email = $3, pwd = $4 WHERE id = $5 RETURNING *';
    const { rows } = await client.query(sql, [name, surname, email, pwd, id]);

    await client.query('COMMIT');

    return rows;
  } catch (error) {
    await client.query('ROLLBACK');
    return [];
  } finally {
    client.release();
  }
}

async function deleteUserDB(id: number): Promise<iUser[]> {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const sql: string = 'DELETE FROM users WHERE id = $1 RETURNING *';
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

async function updateBodyDB(id: number, body: iUser): Promise<iUser[]> {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const sql: string = 'SELECT * FROM users WHERE id = $1';
    const data: iUser[] = (await client.query(sql, [id])).rows;

    const newObj: iUser = { ...data[0], ...body };
    const sql1: string = 'UPDATE users SET name = $1, surname = $2, email = $3, pwd = $4 WHERE id = $5 RETURNING *';
    const { rows } = await client.query(sql1, [newObj.name, newObj.surname, newObj.email, newObj.pwd, id]);

    await client.query('COMMIT');

    return rows;
  } catch (error) {
    await client.query('ROLLBACK');
    return [];
  } finally {
    client.release();
  }
}

export { getAllUsersDB, createUserDB, getUserByIdDB, updateUserByIdDB, deleteUserDB, updateBodyDB };
