-- Run this whole file in one go by running this:
-- $ cat schema.sql | psql

CREATE DATABASE dear_diary;

\c dear_diary;

DROP TABLE IF EXISTS entries;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_hash TEXT
);

INSERT INTO users(name, email, password_hash) VALUES ('bob', 'bob@example.com', '$2b$10$VDV2P7MyqUaEi6AsREOtt.lpyuKWOVn9fBs9wyCUT3uGFnhMjkHce');
INSERT INTO users(name, email, password_hash) VALUES ('alice', 'alice@example.com', '$2b$10$XFPXrqomp1fV7P.669R9auUyUhSWeta62KHiAEDPmw2PMMEHxbob6');

CREATE TABLE entries (
  id SERIAL PRIMARY KEY,
  user_id INTEGER, 
  title TEXT,
  content TEXT,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

-- Bob 
INSERT INTO entries (user_id, title, content) VALUES (1, 'Sadface', 'I am feeling really down today, Suzie was being so mean. I need some chocolate...');
INSERT INTO entries (user_id, title, content) VALUES (1, 'SO EXCITED', 'I GOT THE JOB!! I can''t wait to get started!');

-- Alice
INSERT INTO entries (user_id, title, content) VALUES (2, 'It''s a new year!', 'I am starting the new year with a resolution to journal my thoughts every single day! This time I''m going to do it, this time I am 100% committed.');
INSERT INTO entries (user_id, title, content) VALUES (2, 'We can dooo eeet', 'Alright yeah! Second day of journaling is happening. Today I went to the shops and bought a new fish! Goldie is going to be my best friend through this year.');
INSERT INTO entries (user_id, title, content) VALUES (2, 'Been a while...', 'So it''s been a while since my last journal entry... I guess there''s not that much to update. Goldie died last week, and that was sad.');
