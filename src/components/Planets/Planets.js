import React, { Component } from 'react'
import './Planets.scss'
import Navbar from '../../components/Navbar/Navbar'
import PlanetOne from './PlanetOne'

import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'







export default class Planets extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)

        this.state = {
            show1: false,
            faves: [],
            planets: []
        }
    }
    componentDidMount() {
        axios.get(`/api/planets`).then(
            res => {
                this.setState({ planets: res.data })
            }
        )
        this.getPlanets()
    }

    getPlanets = () => {
        axios.get(`/api/planets`).then(res => {
            console.log(res.data)
            this.setState({ planets: res.data })
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
        console.log(this.state.planets)
        let displayPlanets = this.state.planets.map((planet, index) => {
            return (
                <PlanetOne key={index} planet={planet} />
            )
        })
        return (
            <div className='backgroundImagePlanet'>
                <Navbar />
                <figure id='planet-container'>
                    <div className='displayPlanet'>
                            {displayPlanets}
                    </div>
                </figure>
            </div >
        );
    }
}