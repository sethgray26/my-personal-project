import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { connect } from 'react-redux'
import axios from 'axios';
import ProfileBio from './ProfileBio'
import ConstelOne from '../Constellations/constelOne'
import PlanetOne from '../Planets/PlanetOne'


export class Profile extends Component {
    constructor(props, res) {
        super(props, res)
        this.state = {
            constelFaves: [],
            planetFaves: []

        }
    }
    componentDidMount() {
        this.getFavorites()
    }


    getFavorites = () => {
        axios.get(`/api/favorites`).then(res => {
            this.setState({ constelFaves: res.data[0], planetFaves: res.data[1]})
        })
        // axios.get(`/api/favorites`).then(res => {
        //     this.setState({ planetFaves: res.data[1] })
        // })
    }


    deleteFromFaves(constel_id, planet_id) {
        axios.delete(`/api/favorites/constel/${constel_id}`).then(res => {
            this.setState({ constelFaves: res.data })
        })
        axios.delete(`/api/favorites/planets/${planet_id}`).then(res => {
            this.setState({ planetFaves: res.data})
        })
    }


    render() {
        console.log(this.state.planetFaves[1])
        console.log(this.state.constelFaves)
        let displayConstelFaves = this.state.constelFaves.map((constel, index) => {
            return (
                <ConstelOne key={index} constel={constel} profile={true} deleteFromFaves={() => this.deleteFromFaves(constel.constel_id)} />
            )
        })
        let displayPlanetFaves = this.state.planetFaves.map((planet, index) => {
            return (
                <PlanetOne key={index} planet={planet} profile={true} deleteFromFaves={() => this.deleteFromFaves(planet.planet_id)} />
            )
        })
        return (
            <div>
                <Navbar />
                <img src={this.props.profile_pic} alt='' />
                {this.props.username}
                <ProfileBio />
                {displayConstelFaves}
                {displayPlanetFaves}
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