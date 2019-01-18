-- Select users.${user_id},planet_faves.${planet_id} from users
--     JOIN planet_faves
--     ON users.${user_id} = planet_faves.${planet_id}



select id, pf.user_id, planet_id from planet_faves pf
JOIN users
ON pf.user_id = users.user_id 
WHERE  pf.user_id = ${id}