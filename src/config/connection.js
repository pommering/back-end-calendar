import dotenv from 'dotenv';
import sqlite3 from 'sqlite3';

dotenv.config();

const DATABASE_FILE = process.env.DATABASE_FILE;

if(!DATABASE_FILE) {
  throw new Error('Database not informed');
}

const connection = () => {
  let db = new sqlite3.Database(DATABASE_FILE);
  return db;
}

const QueryExecute = (query, params = []) => {
  let db = connection();

  return new Promise((resolve, reject) => {
    db.all(query, params, (error, rows) => {
      if (error) return reject(error);

      return resolve(rows);
    });
  })
  .finally(() => {
    db.close();
  });
}

export { QueryExecute };
