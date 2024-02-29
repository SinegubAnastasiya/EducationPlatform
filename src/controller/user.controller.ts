import express, { Request, Response } from 'express'
const route = express.Router()
import { buildResponse } from '../helper/buildResponse'
import { 
    createUser, 
    getAllUsers, 
    getUserById, 
    updateUserById, 
    deleteUser,
    updateBody
} from '../service/user.service'
import { iUser } from '../interfaces'

route.post('/', async (req: Request, res: Response) => {
    try {
        const { name, surname, email, pwd } = req.body
        const data: iUser[] = await createUser(name, surname, email, pwd)
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

route.get('/', async (req: Request, res: Response) => {
    try {
        const data: iUser[] = await getAllUsers()
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

route.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const data: iUser[] = await getUserById(id)
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

route.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { name, surname, email, pwd } = req.body
        const data: iUser[] = await updateUserById(id, name, surname, email, pwd)
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

route.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const data: iUser[] = await deleteUser(id)
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

route.patch('/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const body: iUser = req.body;
      const data: iUser[] = await updateBody(id, body);
      buildResponse(res, 200, data);
    } catch (error: any) {
      buildResponse(res, 404, error.message);
    }
  });

export default route