import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import routeUser from './controller/user.controller';
import routeCourse from './controller/course.controller';
import routeApi from './controller/api.controller';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE,PATCH',
    credentials: true,
  }),
);

app.use(bodyParser.json());

app.use('/user', routeUser);
app.use('/course', routeCourse);
app.use('/api', routeApi);

app.use((er: any, _req: Request, res: Response, next: NextFunction) => {
  res.send(er.message);
  next();
});

export { app };
