import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import atmosphere1 from '../../photos/atmosphere1.jpg'
import planet1 from '../../photos/planet1.webp'
import galaxy1 from '../../photos/galaxy1.jpg'
import galaxy2 from '../../photos/galaxy2.jpg'


import { Carousel } from 'react-responsive-carousel';
import './Homepage.scss'


export default class HomePage extends Component {
    render() {

        return (
            <div>
                <Navbar />
                <div id='carousel'>
                    <Carousel >
                        <div className='slideImage'>
                            <img src={planet1} />
                            <p className="legend"> Navigate The Stars </p>
                        </div>

                        <div className='slideImage'>
                            <img src={atmosphere1} />
                            <p className="legend"> Explore Planets </p>
                        </div>

                        <div className='slideImage3'>
                            <img src={galaxy1} />
                            <p className="legend"> Discover Galaxies </p>
                        </div>
                    </Carousel>
                </div>

            </div>
        )
    }
}