CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(180),
    password VARCHAR(180),
    profile_pic TEXT
)