select * from constellations
ORDER BY constel_id asc







-- async (req, res) => {
--         const { constel_id } = req.params
--         const db = req.app.get('db')
--         console.log(req.params)
--         const getConstel = await db.get_constel({ constel_id: constel_id })
--         res.status(200).send(getConstel)
--     },





-- (req, res) => {
--         const db = req.app.get('db')
--         const { constel_id } = req.params
--         db.get_constel({ constel_id }).then(response => {
--             res.status(200).send(response)
--         })
--     },