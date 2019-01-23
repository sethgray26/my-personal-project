INSERT INTO planet_faves
(user_id, planet_id)
VALUES
(${user_id}, ${planet_id})
returning *;