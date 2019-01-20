import React, { Component } from 'react'
import './Planets.scss'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'






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
    componentDidMount(planet_id) {
        axios.get(`/api/planets/${planet_id}`).then(
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



    render() {
        let displayPlanets = this.state.planets.map((planet, index) => {
            return (
                <div key={index}>
                    <h1>
                        {planet.planet_name}
                    </h1>
                    <img className='planet_pic' src={planet.planet_pic} />
                </div>
            )
        })
        return (
            <div>
                <Navbar />
                <div className='displayPlanets'>
                    {displayPlanets}
                </div>
                Planets
            </div>
        )
    }
}