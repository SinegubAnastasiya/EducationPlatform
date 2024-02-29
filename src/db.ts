import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: '5432',
  password: 'kitten1998',
  user: 'postgres',
  database: 'EducationPlatform2',
});

export default pool;