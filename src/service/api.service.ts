import bcrypt from 'bcrypt'
import { iUser } from '../interfaces'
import {
    userRegDB,
    findUserByEmailDB
} from '../repository/api.repository'

const saltround = 3


async function userReg(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const foundedEmail = await findUserByEmailDB(email)
    if (foundedEmail.length) throw new Error('Such user has already existed')

    const hashedPwd = await bcrypt.hash(pwd, saltround)

    const user = await userRegDB(name, surname, email, hashedPwd)
    return user
}

export {
    userReg
}