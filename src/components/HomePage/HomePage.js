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
            <div className='backgroundForHomePage'>
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
                            <div>
                                <p className="legend"> Discover Galaxies </p>
                            </div>
                        </div>
                    </Carousel>
                    <div className='homePageGrayBox'>
                        <h1 className='homePageStarChart'>
                            Welcome To Star Chart!
                            <h3 className='homePageBody'>
                        < hr />
                                Where all your space exploration questions may be answered! You may be wondering why you should use this sight over someone well known like Nasa. Well just look around and we at Star Chart are sure you'll learn something amazing here! Whether it be something new about the stars or a planet you didn't know existed, or even that certain galaxies are not exactly what they appear to be. There is much to be discovered and more as we continually update the site!
                        </h3>
                        </h1>
                    </div>
                </div>

            </div>
        )
    }
}