import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

import scorpio from '../../photos/scorpio.png'
import constel1 from '../../photos/constel1.jpg'
import planet1 from '../../photos/planet1.jpg'
import galaxy1 from '../../photos/galaxy1.jpg'

import Slider from 'react-slick'
import { Carousel } from 'react-bootstrap'

export default class HomePage extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null
        };
    }

    handleSelect(selectedIndex, e) {
        alert(`selected=${selectedIndex}, direction=${e.direction}`);
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }


    render() {
        const { index, direction } = this.state;
        // let settings = {
        //     className: "",
        //     dots: true,
        //     infinite: true,
        //     slidesToShow: 1, 
        //     slidesToScroll: 1,
        //     adaptiveHeight: true
        // };
        return (
            <div>
                <Navbar />
                <Carousel
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect}
                >
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={constel1} />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={planet1} />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={galaxy1} />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/* <div>
                    <h2>Adaptive height</h2>
                    <Slider {...settings}>
                        <div>
                        <Link to='constellations'> <img src={constel1} alt='constel1'></img> </Link>
                        </div>
                        <div>
                            <h3>2</h3>
                            <p>Hello</p>
                        </div>
                        <div>
                            <h3>3</h3>
                            <p>See ....</p>
                            <p>Height is adaptive</p>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>
                <hr /> */}
                {/* <Link to=''> <img src='' alt=''></img> </Link> */}
                {/* <Link to='constellations'> <img src={constel1} alt='constel1'></img> </Link> */}
                hello pt 1
                {/* <Link to='constellations'> <button> Constellations on Carousel </button> </Link> */}
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <hr />
                <Link to='planets'> <img src={planet1} alt='planet1'></img> </Link>
                hello pt 2
                {/* <Link to='planets'> <button> Planets on Carousel </button> </Link> */}
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                <hr />
                <Link to='galaxies'> <img src={galaxy1} alt='constel1'></img> </Link>
                Hello pt 3
                {/* <Link to='galaxies'> <button> Galaxies on Carousel </button> </Link> */}
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <hr />
            </div>


        )
    }
}