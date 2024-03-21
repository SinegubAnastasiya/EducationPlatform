import { iUser } from '../interfaces';

import { getAllUsersDB, createUserDB, getUserByIdDB, updateUserByIdDB, deleteUserDB, updateBodyDB } from '../repository/user.repository';

async function createUser(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const user: iUser[] = await createUserDB(name, surname, email, pwd);
  if (!user.length) throw new Error('Data do not create');
  return user;
}

async function getAllUsers(): Promise<iUser[]> {
  const data: iUser[] = await getAllUsersDB();
  if (!data.length) throw new Error('DB is empty');
  return data;
}

async function getUserById(id: number): Promise<iUser[]> {
  const data: iUser[] = await getUserByIdDB(id);
  if (!data.length) throw new Error('ID does not saved');
  return data;
}
async function updateUserById(id: number, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const data: iUser[] = await updateUserByIdDB(id, name, surname, email, pwd);
  if (!data.length) throw new Error('Data is not saved');
  return data;
}
async function deleteUser(id: number): Promise<iUser[]> {
  const data: iUser[] = await deleteUserDB(id);
  if (!data.length) throw new Error('Id is not found');
  return data;
}

async function updateBody(id: number, body: iUser): Promise<iUser[]> {
  const data: iUser[] = await updateBodyDB(id, body);
  if (!data.length) throw new Error('Data is not changed');
  return data;
}

export { createUser, getAllUsers, getUserById, updateUserById, deleteUser, updateBody };
