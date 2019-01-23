import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import scorpio from '../../photos/scorpio.png'
import constel1 from '../../photos/constel1.jpg'
import planet1 from '../../photos/planet1.webp'
import galaxy1 from '../../photos/galaxy1.jpg'

import { Carousel } from 'react-responsive-carousel';
import './Homepage.scss'


export default class HomePage extends Component {
    render() {

        return (
            <div>
                <Navbar />
                <div id='carousel'>
                    <Carousel >
                        <div>
                            <img src={constel1} />
                            <p className="legend"> Navigate The Stars </p>
                        </div>
                        <div>
                            <img src={planet1} />
                            <p className="legend"> Explore Planets </p>
                        </div>
                        <div>
                            <img src={galaxy1}  />
                            <p className="legend"> Discover Galaxies </p>
                        </div>
                    </Carousel>
                </div>
                {/* <Link to=''> <img src='' alt=''></img> </Link>
                {/* <Link to='constellations'> <img src={constel1} alt='constel1'></img> </Link> */}
                {/* hello pt 1 */}
                {/* <Link to='constellations'> <button> Constellations on Carousel </button> </Link> */}
                {/* <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                {/* <hr /> */}
                {/* <Link to='planets'> <img src={planet1} alt='planet1'></img> </Link> */}
                {/* hello pt 2 */}
                {/* <Link to='planets'> <button> Planets on Carousel </button> </Link> */}
                {/* <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p> */}
                {/* <hr /> */}
                {/* <Link to='galaxies'> <img src={galaxy1} alt='constel1'></img> </Link> */}
                {/* Hello pt 3 */}
                {/* <Link to='galaxies'> <button> Galaxies on Carousel </button> </Link> */}
                {/* <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                {/* <hr /> */}
            </div>
            // 
            // 
        )
    }
}