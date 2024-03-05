import { Response } from 'express'
import { iCourse, iUser } from '../interfaces';
type MessageType = iUser | iUser[] | iCourse | iCourse[] | string

function buildResponse(res: Response, status: number, body: MessageType) {
  res.status(status).send(body);
}

export { buildResponse };
