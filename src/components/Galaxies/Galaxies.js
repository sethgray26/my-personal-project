import React, { Component } from 'react'
import './Galaxies.scss'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'






export default class Galaxies extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.state = {
            show1: false,
            faves: [],
            galaxies: []
        }
    }
    componentDidMount(galaxy_id) {
        axios.get(`/api/galaxies/${galaxy_id}`).then(
            res => {
                this.setState({ galaxies: res.data })
            }
        )
        this.getGalaxies()
    }

    getGalaxies = () => {
        axios.get(`/api/galaxies`).then(res => {
            console.log(res.data)
            this.setState({ galaxies: res.data })
        }
        )
    }

    handleClose(show) {
        this.setState({ [show]: false });
        // window.scrollTo(50, 50)
    }
    handleShow(show) {
        this.setState({ [show]: true });
        window.scrollTo(0, 0)
    }



    render() {
        let displayGalaxies = this.state.galaxies.map((galaxy, index) => {
            return (
                <div key={index}>
                    <h1>
                        {galaxy.galaxy_name}
                    </h1>
                    <img className='galaxy_pic' src={galaxy.galaxy_pic} />
                </div>
            )
        })
        return (
            <div className='backgroundImage'>
                <div>
                    <Navbar />
                    <div className='displayGalaxies'>
                        {displayGalaxies}
                    </div>
                    Galaxies
            </div>
            </div>
        )
    }
}