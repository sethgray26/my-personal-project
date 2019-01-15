require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const controller = require('./controller')


const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env

const app = express()

app.use(express.json())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`${SERVER_PORT} Ducks Marching On Rome.`)
    })
})


app.post('/welcome/register', controller.register)
app.post('/welcome/login', controller.login)

app.get('/welcome/logout', (req, res) => {
    req.session.destroy();
    res.redirect('http://localhost:3000/#/')
})