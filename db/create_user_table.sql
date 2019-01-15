CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(180),
    password VARCHAR(180),
    profile_pic TEXT
)

CREATE TABLE constellations
(
    constel_id SERIAL PRIMARY KEY,
    constel_name VARCHAR(180),
    constel_pic TEXT,
    description TEXT
)

CREATE TABLE planets
(
    planet_id SERIAL PRIMARY KEY,
    planet_name VARCHAR(180),
    planet_pic TEXT,
    description TEXT
)

CREATE TABLE galaxies
(
    galaxy_id SERIAL PRIMARY KEY,
    galaxy_name VARCHAR(180),
    galaxy_pic TEXT,
    description TEXT
)