import React, { Component } from 'react'
import './Profile.scss'
import Navbar from '../../components/Navbar/Navbar'
import { connect } from 'react-redux'
import axios from 'axios';
import ProfileBio from './ProfileBio'

import ConstelOne from '../Constellations/constelOne'
import PlanetOne from '../Planets/PlanetOne'
import GalaxyOne from '../Galaxies/GalaxyOne'


export class Profile extends Component {
    constructor(props, res) {
        super(props, res)
        this.state = {
            constelFaves: [],
            planetFaves: [],
            galaxyFaves: []
        }
    }
    componentDidMount() {
        this.getFavorites()
    }


    getFavorites = () => {
        axios.get(`/api/favorites`).then(res => {
            console.log(res)
            this.setState({ constelFaves: res.data[0], planetFaves: res.data[1], galaxyFaves: res.data[2] })
        })
        // axios.get(`/api/favorites`).then(res => {
        //     this.setState({ planetFaves: res.data[1] })
        // })
    }


    deleteFromConstelFaves(constel_id, planet_id, galaxy_id) {
        axios.delete(`/api/favorites/constel/${constel_id}`).then(res => {
            this.setState({ constelFaves: res.data })
        })
    }

    deleteFromPlanetFaves(planet_id) {
        axios.delete(`/api/favorites/planets/${planet_id}`).then(res => {
            this.setState({ planetFaves: res.data })
        })
    }

    deleteFromGalaxyFaves(galaxy_id) {
        axios.delete(`/api/favorites/galaxies/${galaxy_id}`).then(res => {
            this.setState({ galaxyFaves: res.data })
        })
    }


    render() {
        console.log(this.state.planetFaves[1])
        console.log(this.state.constelFaves)
        let displayConstelFaves = this.state.constelFaves.map((constel, index) => {
            return (
                <ConstelOne key={index} constel={constel} profile={true} deleteFromFaves={() => this.deleteFromConstelFaves(constel.constel_id)} />
            )
        })
        let displayPlanetFaves = this.state.planetFaves.map((planet, index) => {
            return (
                <PlanetOne key={index} planet={planet} profile={true} deleteFromFaves={() => this.deleteFromPlanetFaves(planet.planet_id)} />
            )
        })
        let displayGalaxyFaves = this.state.galaxyFaves
        let display = []
        if (displayGalaxyFaves) {
            display = displayGalaxyFaves.map((galaxy, index) => {
                return (
                    <GalaxyOne key={index} galaxy={galaxy} profile={true} deleteFromFaves={() => this.deleteFromGalaxyFaves(galaxy.galaxy_id)} />
                )
            })
        }
        return (
            <div className='backgroundProfileImage'>
                <Navbar />
                <img src={this.props.profile_pic} alt='' />
                {this.props.username}
                <ProfileBio />
                {displayConstelFaves}
                {displayPlanetFaves}
                {display}
            </div>
        )
    }
}



const mapState = (reduxState) => {
    return {
        username: reduxState.username,
        profile_pic: reduxState.profile_pic,
        favorites: reduxState.favorites
    }
}

export default connect(mapState)(Profile)