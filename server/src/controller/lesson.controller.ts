import express, { Request, Response } from 'express';
const route = express.Router();
import { buildResponse } from '../helper/buildResponse';
import { iLesson } from '../interfaces';
import { 
    createLessons, 
    getAllLessons,
    getLessonByCourseId,
    updateLessons,
    deleteLesson
 } from '../service/lesson.service';

route.post('/', async (req: Request, res: Response) => {
  try {
    const { title, course_id } = req.body;
    const data: iLesson[] = await createLessons(title, course_id);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/', async (req: Request, res: Response) => {
  try {
    const data: iLesson[] = await getAllLessons();
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:course_id', async (req: Request, res: Response) => {
  try {
    const { course_id } = req.params;
    const data: iLesson[] = await getLessonByCourseId(course_id);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, course_id } = req.body;
    const data: iLesson[] = await updateLessons(id, title, course_id);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data: iLesson[] = await deleteLesson(id);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

export default route;