-- select id, cf.user_id, constel_id from constel_faves cf
-- JOIN users
-- ON cf.user_id = users.user_id 
-- WHERE  cf.user_id = ${user_id}


SELECT * from constellations co
JOIN constel_faves cf
ON co.constel_id = cf.constel_id
WHERE user_id = ${user_id}













-- #	constel_id	constel_name	constel_pic	description

-- 1	2	Taurus	https://ak7.picdn.net/shutterstock/videos/19478467/thumb/10.jpg	null

-- 2	4	Cancer	https://ak6.picdn.net/shutterstock/videos/19478686/thumb/10.jpg	null

-- 3	5	Leo	https://ak7.picdn.net/shutterstock/videos/19478437/thumb/10.jpg	null

-- 4	6	Virgo	https://ak8.picdn.net/shutterstock/videos/19478458/thumb/10.jpg	null

-- 5	7	Libra	https://ak0.picdn.net/shutterstock/videos/19478440/thumb/10.jpg	null

-- 6	8	Scorpio	https://ak3.picdn.net/shutterstock/videos/19478443/thumb/10.jpg?ip=x480	null

-- 7	9	Sagittarius	https://ak9.picdn.net/shutterstock/videos/19478479/thumb/10.jpg?ip=x480	null

-- 8	10	Capricorn	https://ak8.picdn.net/shutterstock/videos/19478488/thumb/10.jpg	null

-- 9	11	Aquarius	https://ak4.picdn.net/shutterstock/videos/19478434/thumb/10.jpg	null

-- 10	12	Pisces	https://ak1.picdn.net/shutterstock/videos/19478491/thumb/10.jpg?ip=x480	null

-- 11	1	Aries	https://ak2.picdn.net/shutterstock/videos/19478482/thumb/10.jpg	Libra is a constellation in the southern hemisphere

-- 12	3	Gemini	https://cf.ltkcdn.net/horoscopes/images/std/220629-800x450-Gemini-Constellation.jpg	null
