import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { connect } from 'react-redux'
import axios from 'axios';


export class Profile extends Component {
    constructor() {
        super()
        this.state = {
            faves: [],
        }
    }
    componentDidMount(user_id) {
        axios.get(`/api/favorites/${user_id}`).then(
            res => {
                this.setState({ faves: res.data })
            }
        )
        this.getFavorites()
    }



    getFavorites = () => {
        axios.get(`/api/favorites`).then(res => {
            this.setState({ faves: res.data })
        }
        )
    }



    render() {
        console.log(this.state.faves)
        let displayFaves = this.state.faves.map((fave, index) => {
            return (
                <div key={index}>
                    <h1>
                        {fave.constel_name}
                    </h1>
                    <img src={fave.constel_pic} />
                </div>
    
                )
            })
            return (
            <div>
                        <Navbar />
                        <img src={this.props.profile_pic} alt='' />
                        {this.props.username}
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