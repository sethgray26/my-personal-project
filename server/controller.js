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
    getFavorite: async (req, res) => {
        // const { username, constel_id, planet_id, galaxy_id } = req.body;
        const db = req.app.get('db')
        // const userArr = await db.constel_faves({ username: username })
        console.log(req.session.user)
        const constelFave = await db.constel_faves({ user_id: req.session.user.id })
        // const planetFave = await db.planet_faves({ user_id: user_id, planet_id: planet_id })
        // const galaxyFave = await db.galaxy_faves({ user_id: user_id, galaxy_id: galaxy_id })
        // req.session.user = {
        //     id: userArr[0].user_id, constel_id: constelFave[0].constel_id, planet_id: planetFave[0].planet_id,
        //     galaxy_id: galaxyFave[0].galaxy_id
        // }
        res.status(200).send(constelFave)
    },
    userData: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else (
            res.status(401).send('Please Log In.')
        )
    }
}