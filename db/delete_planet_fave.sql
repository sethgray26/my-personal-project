DELETE FROM planet_faves
WHERE user_id = ${user_id}
AND planet_id = ${planet_id}











-- Column	Type	Not Null	Default Value	 	Description
-- id	integer	NOT NULL	DEFAULT nextval('planet_faves_id_seq'::regclass)		
-- user_id	integer				
-- planet_id	integer				
-- CONSTRAINT planet_faves_pkey PRIMARY KEY (id)