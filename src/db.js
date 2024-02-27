const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: '5432',
  password: 'kitten1998',
  user: 'postgres',
  database: 'EducationPlatform2',
});

module.exports = pool;