-- schema.sql
-- Since we might run the import many times we'll drop if exists
DROP DATABASE IF EXISTS user;

CREATE DATABASE user;

-- Make sure we're using our `user` database
\c user;

-- We can create our user table
CREATE TABLE IF NOT EXISTS user (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR,
  lastName VARCHAR,
  email VARCHAR,
  phone VARCHAR,
  photo VARCHAR
);
