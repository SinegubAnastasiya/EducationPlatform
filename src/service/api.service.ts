import bcrypt from 'bcrypt';
import { iUser } from '../interfaces';
import { userRegDB, findUserByEmailDB } from '../repository/api.repository';

const saltround = 3;

async function userReg(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const foundedEmail: iUser[] = await findUserByEmailDB(email);
  if (foundedEmail.length) throw new Error('Such user already exists');

  const hashedPwd: string = await bcrypt.hash(pwd, saltround);

  const user: iUser[] = await userRegDB(name, surname, email, hashedPwd);
  if (!user.length) throw new Error('Data is not saved');
  return user;
}

async function userAuth(email: string, pwd: string): Promise<iUser[]> {
  const user: iUser[] = await findUserByEmailDB(email);
  if (!user.length) throw new Error('Wrong email or password');

  const comparePwd: boolean = await bcrypt.compare(pwd, user[0].pwd);
  if (!comparePwd) throw new Error('Wrong email or password');

  return user;
}

export { userReg, userAuth };
