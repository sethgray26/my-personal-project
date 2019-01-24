SELECT * from galaxies g
JOIN galaxy_faves gf
ON g.galaxy_id = gf.galaxy_id
WHERE user_id = ${user_id}

