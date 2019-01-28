import React, { Component } from 'react'
import './Constel.scss'
import Navbar from '../../components/Navbar/Navbar'
import ConstelOne from './constelOne'
import axios from 'axios';

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
                <figure id='constellation-container'>
                    <div className='displayConstel'>
                        {displayConstel}
                    </div>
                </figure>
            </div >
        );
    }
}




