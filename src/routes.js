import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from './components/Welcome/Welcome'
import Homepage from './components/HomePage/Homepage'
import Profile from './components/Profile/Profile'
import Constellations from './components/Constellations/Constel'
import Planets from './components/Planets/Planets'
import Galaxy from './components/Galaxy/Galaxy'





export default (
    <Switch>
        <Route path='/' exact component={Welcome} />
        <Route path='/homepage' component={Homepage} />
        <Route path='/profile' component={Profile} />
        <Route path='/constellations' component={Constellations} />
        <Route path='/planets' component={Planets} />
        <Route path='/galaxy' component={Galaxy} />
    </Switch>
)