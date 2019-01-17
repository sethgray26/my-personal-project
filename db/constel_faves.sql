Select users.user_id,constel_id from users
    JOIN constel_faves
    ON users.user_id = constel_faves.constel_id
