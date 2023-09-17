CREATE DATABASE IF NOT EXISTS test;

USE test;

CREATE TABLE IF NOT EXISTS tests(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  PRIMARY KEY (id)
);

INSERT INTO tests (title, description) VALUES
  ('Test 1', 'This is a test'),
  ('Test 2', 'This is another test'),
  ('Test 3', 'This is a third test');