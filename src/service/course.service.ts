import { iCourse, iUser } from '../interfaces'
import { 
    createCoursesDB,
    getAllCoursesDB,
    updateCoursesDB,
    deleteCoursesDB,
    getCourseByIdDB
} from '../repository/course.repository'

async function createCourses(course: string, description: string): Promise<iCourse[]> {
    const data: iCourse[] = await createCoursesDB(course, description)
    if (!data.length) throw new Error('Array is empty')
    return data
}

async function getAllCourses(): Promise<iCourse[]> {
    const data: iCourse[] = await getAllCoursesDB()
    if (!data.length) throw new Error('Array is empty')
    return data
}

async function updateCourses(id: number, course: string, description: string): Promise<iCourse[]> {
    const data: iCourse[] = await updateCoursesDB(id, course, description)
    if (!data.length) throw new Error('Array is empty')
    return data
}

async function deleteCourses(id: number): Promise<iCourse[]> {
    const data: iCourse[] = await deleteCoursesDB(id)
    if (!data.length) throw new Error('Array is empty')
    return data
}

async function getCourseById(id: number): Promise<iCourse[]> {
    const data: iCourse[] = await getCourseByIdDB(id)
    if (!data.length) throw new Error('Such id not found')
    return data
}



export { createCourses,
    getAllCourses,
    updateCourses,
    deleteCourses,
    getCourseById
} 