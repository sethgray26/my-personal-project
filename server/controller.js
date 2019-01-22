const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        const userArr = await db.find_username({ username: username })
        if (userArr.length !== 0) {
            return res.status(200).send({ message: 'Username Already In use.' })
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt);
        let newUserArr = await db.create_user({ username: username, hash: hash })
        req.session.user = { id: newUserArr[0].user_id, username: newUserArr[0].username }
        res.status(200).send({
            message: 'Account Created Successfully!', userData: {
                ...req.session.user, profile_pic:
                    'https://vignette.wikia.nocookie.net/pixar/images/a/ae/Alien.jpg/revision/latest?cb=20110220175306'
            }, loggedIn: true
        })
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db')
        const userArr = await db.find_username({ username: username })
        if (!userArr[0]) {
            return res.status(200).send({ message: 'Username Not Found.' })
        }
        const result = bcrypt.compareSync(password, userArr[0].password)
        if (!result) {
            return res.status(401).send({ message: 'Invalid Password.' })
        }
        req.session.user = { id: userArr[0].user_id, username: userArr[0].username }
        res.status(200).send({
            message: 'Logged In', userData: {
                ...req.session.user, profile_pic:
                    'https://vignette.wikia.nocookie.net/pixar/images/a/ae/Alien.jpg/revision/latest?cb=20110220175306'
            }, loggedIn: true
        })
    },

    updateBio: async (req, res) => {
        const { updateBio } = req.body
        const db = req.app.get('db')
        // req.session.user = { user_id: user_id }
        const bioUpdate = await db.update_bio({ bio: updateBio, user_id: req.session.user.id })
        req.session.user.bio = bioUpdate[0].bio
        res.status(200).send(req.session.user.bio)
    },

    // cannot do a req.body on a get request as a get does not have a body

    getBio: async (req, res) => {
        const db = req.app.get('db')
        const userBio = await db.get_bio({ user_id: req.session.user.id })
        // req.session.user = { bio: userBio[0].bio }
        res.status(200).send(userBio)
    },

    getFavorite: async (req, res) => {
        const db = req.app.get('db')
        console.log(req.session.user)
        const constelFave = await db.constel_faves({ user_id: req.session.user.id })
        res.status(200).send(constelFave)
    },

    getConstellation: async (req, res) => {
        const { constel_id } = req.params
        const db = req.app.get('db')
        console.log(req.params)
        const getConstel = await db.get_constel({ constel_id: constel_id })
        res.status(200).send(getConstel)
    },

    getPlanets: async (req, res) => {
        const { planet_id } = req.params;
        const db = req.app.get('db')
        const getPlanet = await db.get_planets({ planet_id })
        res.status(200).send(getPlanet)
    },

    getGalaxies: async (req, res) => {
        const { galaxy_id } = req.params;
        const db = req.app.get('db')
        const getGalaxy = await db.get_galaxy({ galaxy_id })
        res.status(200).send(getGalaxy)
    },

    addFavorite: async (req, res) => {
        const db = req.app.get('db')
        console.log(req.session.user)
        const constelFave = await db.constel_faves({ user_id: req.session.user.id })
        const planetFave = await db.planet_faves({ user_id: req.session.user.id })
        const galaxyFave = await db.galaxy_faves({ user_id: req.session.user.id })

        res.status(200).send(constelFave, planetFave, galaxyFave)
    },
    userData: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else (
            res.status(401).send('Please Log In.')
        )
    }
}