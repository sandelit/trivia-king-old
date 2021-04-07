CREATE DATABASE triviaking;

--\c into triviaking

CREATE TABLE questions(
    question_id SERIAL PRIMARY KEY,
    category VARCHAR(255),
    type VARCHAR(255),
    difficulty VARCHAR(255),
    question VARCHAR(255),
    correct_answer VARCHAR(255),
    incorrect_answers VARCHAR(255)
);

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);