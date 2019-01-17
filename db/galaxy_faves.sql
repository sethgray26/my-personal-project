Select users.user_id,galaxy_id from users
    JOIN galaxy_faves
    ON users.user_id = galaxy_faves.galaxy_id
