import React, { Component } from 'react'
import './Galaxies.scss'
import Navbar from '../../components/Navbar/Navbar'
import GalaxyOne from './GalaxyOne'

import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'




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
    componentDidMount() {
        axios.get(`/api/galaxies`).then(
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

    addToFaves(faves) {
        this.setState(({ faves: faves }))
    }



    render() {
        console.log(this.state.galaxy)
        let displayGalaxy = this.state.galaxies.map((galaxy, index) => {
            return (
                <GalaxyOne key={index} galaxy={galaxy} />
            )
        })
        return (
            <div className='backgroundImageGalaxy'>
                <Navbar />
                <figure id='galaxy-container'>
                    <div className='displayGalaxy'>
                            {displayGalaxy}
                    </div>
                </figure>
            </div >
        );
    }
}




