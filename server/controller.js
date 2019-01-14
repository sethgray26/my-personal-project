const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        const userArr = await db.find_username({ username: username })
        if (userArr.length !== 0) {
            return res.status(200).send({ message: 'Username Already In Use.' })
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt);
        let newUserArr = await db.create_user({ username: username, hash: hash })
        req.session.user = { id: newUserArr[0].user_id, username: newUserArr[0].username }
        res.status(200).send({ message: 'Account Created Successfully!', userData: req.session.user, loggedIn: true })
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
        res.status(200).send({ message: 'Logged In', userData: req.session.user, loggedIn: true })
    },
    userData: (req, res) => {
        if (req.sessions.user) {
            res.status(200).send(req.session.user)
        } else (
            res.status(401).send('Please Log In.')
        )
    }
}