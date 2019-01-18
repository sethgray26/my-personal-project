select id, gf.user_id, galaxy_id from galaxy_faves gf
JOIN users
ON gf.user_id = users.user_id 
WHERE  gf.user_id = ${id}