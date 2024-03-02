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

export { iUser, iCourse };
