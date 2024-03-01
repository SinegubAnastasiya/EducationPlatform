import express, { Request, Response } from 'express'
const route = express.Router()
import { buildResponse } from '../helper/buildResponse'
import { iUser } from '../interfaces'
import {
    userReg
} from '../service/api.service'

route.post('/reg', async (req: Request, res: Response) => {
    try {
        const { name, surname, email, pwd } = req.body
        const data: iUser[] = await userReg(name, surname, email, pwd)
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

export default route