import React, { Component } from 'react'
import './Constel.scss'
import Navbar from '../../components/Navbar/Navbar'
import ConstelOne from './constelOne'

import aries from '../../photos/aries.jpg'
import taurus from '../../photos/taurus.jpg'
import gemini from '../../photos/gemini.jpg'
import cancer from '../../photos/cancer.jpg'
import leo from '../../photos/leo.jpg'
import virgo from '../../photos/virgo.jpg'
import libra from '../../photos/libra.jpg'
import scorpio from '../../photos/scorpio.png'
import sagitarrius from '../../photos/sagitarrius.jpg'
import capricorn from '../../photos/capricorn.jpg'
import aquarius from '../../photos/aquarius.jpg'
import pisces from '../../photos/pisces.jpg'

import { Modal, Button } from 'react-bootstrap'
import axios from 'axios';
import Particles from 'react-particles-js'


export default class Constellations extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show1: false,
            faves: [],
            constellations: []
        };
    }
    componentDidMount() {
        axios.get(`/api/constellations`).then(
            res => {
                this.setState({ constellations: res.data })
            }
        )
        this.getConstellations()
    }



    getConstellations = () => {
        axios.get(`/api/constellations`).then(res => {
            console.log(res.data)
            this.setState({ constellations: res.data })
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
    alStyle = () => {

        return {
            position: 'fixed',
            width: 400,
            zIndex: 1040,

            border: '1px solid #e5e5e5',
            backgroundColor: 'white',
            boxShadow: '0 5px 15px rgba(0,0,0,.5)',
            padding: 20
        };
    };



    render() {
        console.log(this.state.constellations)
        let displayConstel = this.state.constellations.map((constel, index) => {
            return (
                <ConstelOne key={index} constel={constel} />
            )
        })

        return (

            <div className='backgroundImageConstel'>
                <Navbar />
                {/* <div className='particlesOnConstel'>
                <Particles
                params={{
                  "particles": {
                    "number": {
                      "value": 700,
                      "density": {
                        "enable": true,
                        "value_area": 6000,
                      },
                    },
                    "color": {
                      "value": "#ffffb3"
                    },
                    "line_linked": {
                      "enable": true,
                      "opacity": .1,
                      "bounce": false,
                    },
                    "move": {
                      'out_mode': 'out',
                      "direction": "bottom-left",
                      "speed": .5,
                      "bounce": false
                    },
                    "size": {
                      "value": 4
                    },
                    "opacity": {
                      "anim": {
                        "enable": true,
                        "speed": 4,
                        "opacity_min": 0.09
                      }
                    }
                  },
                  "interactivity": {
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "bubble"
                      }
                    },
                    "modes": {
                      // "push": {
                      //   "particles_nb": 1
                      // },
                      "bubble": {
                        "size": 10,
                        "distance": 200
                      }
                    }
                  }
                }} />
                </div> */}
                {/* <div className='particlesOnConstel'> */}
                <figure id='constellation-container'>
                    <div className='displayConstel'>
                            {displayConstel}
                    </div>
                </figure>
                {/* </div> */}
            </div >
        );
    }
}




