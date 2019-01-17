Select users.user_id,planet_id from users
    JOIN planet_faves
    ON users.user_id = planet_faves.planet_id
