UPDATE users
SET bio = ${bio}
WHERE user_id = ${user_id}
returning *;