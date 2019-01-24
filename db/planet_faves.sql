-- Select users.${user_id},planet_faves.${planet_id} from users
--     JOIN planet_faves
--     ON users.${user_id} = planet_faves.${planet_id}



SELECT * from planets p
JOIN planet_faves pf
ON p.planet_id = pf.planet_id
WHERE user_id = ${user_id}

