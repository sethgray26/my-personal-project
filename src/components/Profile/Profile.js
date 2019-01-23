import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { connect } from 'react-redux'
import axios from 'axios';
import ProfileBio from './ProfileBio'
import ConstelOne from '../Constellations/constelOne'


export class Profile extends Component {
    constructor(props, res) {
        super(props, res)
        this.state = {
            constelFaves: [],

        }
    }
    componentDidMount() {
        this.getFavorites()
    }


    getFavorites = () => {
        axios.get(`/api/favorites`).then(res => {
            this.setState({ constelFaves: res.data })
        })
    }


    deleteFromFaves(constel_id) {
        axios.delete(`/api/favorites/constel/${constel_id}`).then(res => {
            this.setState({ constelFaves: res.data })
        })
    }


    render() {
        console.log(this.state.constelFaves)
        let displayFaves = this.state.constelFaves.map((constel, index) => {
            return (
                <ConstelOne key={index} constel={constel} profile={true} deleteFromFaves={() => this.deleteFromFaves(constel.constel_id)} />
            )
        })
        return (
            <div>
                <Navbar />
                <img src={this.props.profile_pic} alt='' />
                {this.props.username}
                <ProfileBio />
                {displayFaves}
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