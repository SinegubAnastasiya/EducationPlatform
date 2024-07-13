interface iUser {
  readonly id?: number;
  name?: string;
  surname?: string;
  email?: string;
  pwd?: string;
}

interface iCourse {
  readonly id?: number;
  course?: string;
  description?: string;
}

interface iLesson {
  readonly id?: number;
  title?: string;
  course_id?: number;
}

export { iUser, iCourse, iLesson };
