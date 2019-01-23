INSERT INTO constel_faves
(user_id, constel_id)
VALUES
(${user_id}, ${constel_id})
returning *;