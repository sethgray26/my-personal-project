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
        res.status(200).send({ message: 'Account Created Successfully!', userData: { ...req.session.user, profile_pic: 'data:image/jpeg;base64,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' }, loggedIn: true })
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
        res.status(200).send({ message: 'Logged In', userData: { ...req.session.user, profile_pic: 'data:image/jpeg;base64,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' }, loggedIn: true })
    },
    userData: (req, res) => {
        if (req.sessions.user) {
            res.status(200).send(req.session.user)
        } else (
            res.status(401).send('Please Log In.')
        )
    }
}