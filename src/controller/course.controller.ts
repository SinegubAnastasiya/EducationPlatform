import express, { Request, Response } from 'express'
const route = express.Router()
import { buildResponse } from '../helper/buildResponse'
import { iCourse } from '../interfaces'
import { 
    createCourses,
    getAllCourses,
    updateCourses,
    deleteCourses,
    getCourseById
} from '../service/course.service'

route.post('/', async (req: Request, res: Response) => {
    try {
        const { course, description } = req.body
        const data: iCourse[] = await createCourses(course, description)
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

route.get('/', async (req: Request, res: Response) => {
    try {
        const data: iCourse[] = await getAllCourses()
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
}) 

route.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const data: iCourse[] = await getCourseById(id)
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

route.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { course, description } = req.body
        const data: iCourse[] = await updateCourses(id, course, description)
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

route.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const data: iCourse[] = await deleteCourses(id)
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

export default route
