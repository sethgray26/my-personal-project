select * from favorites f
INNER JOIN constellations c
on c.constel_id = f.constel_id
WHERE f.user_id = ${user_id};

select * from favorites f
INNER JOIN planets p
ON p.planet_id = f.planet_id
WHERE f.user_id = ${user_id};

select * from favorites f
INNER JOIN galaxies g
ON g.galaxy_id = f.galaxy_id
WHERE f.user_id =  ${user_id};