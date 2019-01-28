require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const controller = require('./controller')


const { SERVER_PORT, CONNECTION_STRING, SECRET, REACT_APP_HOME } = process.env

const app = express()

app.use(express.json())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))


app.use(express.static(`${__dirname}/../build`));


massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`${SERVER_PORT} Ducks Marching On Rome.`)
    })
})


app.post('/welcome/register', controller.register)
app.post('/welcome/login', controller.login)
app.get('/api/profile', controller.userData)

app.get('/api/favorites', controller.getFavorite)

app.post('/api/favorites/constel', controller.addConstelFave)
app.delete(`/api/favorites/constel/:constel_id`, controller.deleteConstelFave)

app.post('/api/favorites/planets', controller.addPlanetFave)
app.delete(`/api/favorites/planets/:planet_id`, controller.deletePlanetFave)

app.post('/api/favorites/galaxies', controller.addGalaxyFave)
app.delete(`/api/favorites/galaxies/:galaxy_id`, controller.deleteGalaxyFave)

app.get('/api/bio', controller.getBio)
app.put('/api/bio', controller.updateBio)

app.get('/api/constellations', controller.getConstellation)
app.get('/api/planets', controller.getPlanets)
app.get('/api/galaxies', controller.getGalaxies)

app.get('/welcome/logout', (req, res) => {
    req.session.destroy();
    res.redirect(REACT_APP_HOME)
})