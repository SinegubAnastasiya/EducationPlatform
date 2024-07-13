import { iLesson } from '../interfaces';
import { 
    createLessonsDB, 
    getAllLessonsDB,
    getLessonByCourseIdDB,
    updateLessonsDB,
    deleteLessonDB 
} from '../repository/lesson.repository';

async function createLessons(title: string, course_id: number): Promise<iLesson[]> {
  const data: iLesson[] = await createLessonsDB(title, course_id);
  if (!data.length) throw new Error('The database does not created');
  return data;
}

async function getAllLessons(): Promise<iLesson[]> {
  const data = await getAllLessonsDB();
  if (!data.length) throw new Error('Array is empty');
  return data;
}

async function getLessonByCourseId(course_id: number): Promise<iLesson[]> {
  const data = await getLessonByCourseIdDB(course_id);
  if (!data.length) throw new Error('Such id not found');
  return data;
}

async function updateLessons(id: number, title: string, course_id: number): Promise<iLesson[]> {
  const data = await updateLessonsDB(id, title, course_id);
  if (!data.length) throw new Error('Data is not saved');
  return data;
}

async function deleteLesson(id: number): Promise<iLesson[]> {
  const data = await deleteLessonDB(id);
  if (!data.length) throw new Error('Such data not found');
  return data;
}

export { 
    createLessons, 
    getAllLessons,
    getLessonByCourseId,
    updateLessons,
    deleteLesson
};