INSERT INTO galaxy_faves
(user_id, galaxy_id)
VALUES
(${user_id}, ${galaxy_id})
returning *;