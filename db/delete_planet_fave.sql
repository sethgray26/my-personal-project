DELETE FROM planet_faves
WHERE user_id = ${user_id}
AND planet_id = ${planet_id}