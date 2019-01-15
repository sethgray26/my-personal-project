import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import constel1 from '../../photos/constel1.jpg'
import constel2 from '../../photos/constel2.jpg'
import constel3 from '../../photos/constel3.jpg'


export default class Constellations extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <img src={constel1} alt='constel1'></img>
                <hr />
                <img src={constel2} alt='constel2'></img>
                <hr />
                <img src={constel3} alt='constel3'></img>
                Constellations
            </div>
        )
    }
}