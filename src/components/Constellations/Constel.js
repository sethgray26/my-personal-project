import React, { Component } from 'react'
import './Constel.scss'
import Navbar from '../../components/Navbar/Navbar'

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
// import Particles from 'react-particles-js'


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
    componentDidMount(constel_id) {
        axios.get(`/api/constellations/${constel_id}`).then(
            res => {
                this.setState({ constellations: res.data })
            }
        )
        this.getConstellations()
    }

    
    getConstellations = () => {
        axios.get(`/api/constellations`).then(res => {
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


    render() {
        console.log(this.state.constellations)
        let displayConstel = this.state.constellations.map((constel, index) => {
            return (
                <div key={index}>
                    <h1>
                        {constel.constel_name}
                    </h1>
                    <img src={constel.constel_pic} />
                </div>
            )
        })
        return (
            <div>
                <div className='particles'>
                    <Navbar />

                    <figure id='constellation-container'>

                        <div className='constel-left-row'>

                            {displayConstel}
                            <img className='constel-page-img' onClick={() => this.handleShow('show1')} src={aries} alt='' />
                            <Modal show={this.state.show1} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show1')}>
                                    </div>
                                    <figure className='constel-modal' >
                                        <Button className='close-modal' onClick={() => this.handleClose('show1')}>X</Button>
                                        <Button className='favorite-btn' onClick={() => this.addToFaves('faves')}> Favorite </Button>
                                        <img className='constel-modal-img' src={aries} alt=''></img>
                                        <h1> Aries
                                            <p className='constel-text'>Date of Birth: March 21 -April 19 </p>
                                        </h1>
                                    </figure>
                                </div>
                            </Modal>


                            <img className='constel-page-img' onClick={() => this.handleShow('show4')} src={cancer} alt='' />
                            <Modal show={this.state.show4} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show4')}>
                                    </div>
                                    <figure className='constel-modal' >
                                        <Button className='close-modal' onClick={() => this.handleClose('show4')}>X</Button>
                                        <img className='constel-modal-img' src={cancer} alt=''></img>
                                        <h1> Cancer
                                            <p className='constel-text'>Date of Birth: May 21 - June 21</p>
                                        </h1>
                                    </figure>
                                </div>
                            </Modal>


                            <img className='constel-page-img' onClick={() => this.handleShow('show7')} src={libra} alt='' />
                            <Modal show={this.state.show7} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show7')}>
                                    </div>
                                    <figure className='constel-modal' >
                                        <Button className='close-modal' onClick={() => this.handleClose('show7')}>X</Button>
                                        <img className='constel-modal-img' src={libra} alt=''></img>
                                        <h1> Libra
                                        <p className='constel-text'> Date of Birth: September 23 - October 23 </p>
                                        </h1>
                                    </figure>
                                </div>
                            </Modal>

                            <img className='constel-page-img' onClick={() => this.handleShow('show10')} src={capricorn} alt='' />
                            <Modal show={this.state.show10} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show10')}>
                                    </div>
                                    <figure className='constel-modal' >
                                        <Button className='close-modal' onClick={() => this.handleClose('show10')}>X</Button>
                                        <img className='constel-modal-img' src={capricorn} alt=''></img>
                                        <h1> Capricorn
                                        <p className='constel-text'> Date of Birth: December 22 - January 19 </p>
                                        </h1>
                                    </figure>
                                </div>
                            </Modal>
                        </div>

                        <div className='constel-middle-row'>


                            <img className='constel-page-img' onClick={() => this.handleShow('show2')} src={taurus} alt='' />
                            <Modal show={this.state.show2} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show2')}>
                                    </div>
                                    <figure className='constel-modal'>
                                        <Button className='close-modal' onClick={() => this.handleClose('show2')}>X</Button>
                                        <img className='constel-modal-img' src={taurus} alt=''></img>
                                        <h1> Taurus
                                        <p className='constel-text'> Date of Birth: April 20 - May 20</p>
                                        </h1>

                                    </figure>
                                </div>
                            </Modal>

                            <img className='constel-page-img' onClick={() => this.handleShow('show5')} src={leo} alt='' />
                            <Modal show={this.state.show5} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show5')}>
                                    </div>
                                    <figure className='constel-modal'>
                                        <Button className='close-modal' onClick={() => this.handleClose('show5')}>X</Button>
                                        <img className='constel-modal-img' src={leo} alt=''></img>
                                        <h1> Leo
                                        <p className='constel-text'> Date of Birth: July 23 - August 22 </p>
                                        </h1>
                                    </figure>
                                </div>
                            </Modal>

                            <img className='constel-page-img' onClick={() => this.handleShow('show8')} src={scorpio} alt='' />
                            <Modal show={this.state.show8} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show8')}>
                                    </div>
                                    <figure className='constel-modal' >
                                        <Button className='close-modal' onClick={() => this.handleClose('show8')}>X</Button>
                                        <img className='constel-modal-img' src={scorpio} alt=''></img>
                                        <h1> Scorpio
                                        <p className='constel-text'> Date of Birth: October 24 - November 22 </p>
                                        </h1>
                                    </figure>
                                </div>
                            </Modal>


                            <img className='constel-page-img' onClick={() => this.handleShow('show11')} src={aquarius} alt='' />
                            <Modal show={this.state.show11} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show11')}>
                                    </div>
                                    <figure className='constel-modal' >
                                        <Button className='close-modal' onClick={() => this.handleClose('show11')}>X</Button>
                                        <img className='constel-modal-img' src={aquarius} alt=''></img>
                                        <h1> Aquarius
                                        <p className='constel-text'> Date of Birth: January 20 - February 18 </p>
                                        </h1>
                                    </figure>
                                </div>
                            </Modal>
                        </div>

                        <div className='constel-right-row'>

                            <img className='constel-page-img' onClick={() => this.handleShow('show3')} src={gemini} alt='' />
                            <Modal show={this.state.show3} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show3')}>
                                    </div>
                                    <figure className='constel-modal'>
                                        <Button className='close-modal' onClick={() => this.handleClose('show3')}>X</Button>
                                        <img className='constel-modal-img' src={gemini} alt=''></img>
                                        <h1> Gemini
                                        <p className='constel-text'> Date of Birth: May 21 - June 21</p>
                                        </h1>
                                    </figure>
                                </div>
                            </Modal>

                            <img className='constel-page-img' onClick={() => this.handleShow('show6')} src={virgo} alt='' />
                            <Modal show={this.state.show6} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show6')}>
                                    </div>
                                    <figure className='constel-modal'>
                                        <Button className='close-modal' onClick={() => this.handleClose('show6')}>X</Button>
                                        <img className='constel-modal-img' src={virgo} alt=''></img>
                                        <h1> Virgo
                                        <p className='constel-text'> Date of Birth: August 23 - September 22 </p>
                                        </h1>
                                    </figure>
                                </div>
                            </Modal>

                            <img className='constel-page-img' onClick={() => this.handleShow('show9')} src={sagitarrius} alt='' />
                            <Modal show={this.state.show9} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show9')}>
                                    </div>
                                    <figure className='constel-modal'>
                                        <Button className='close-modal' onClick={() => this.handleClose('show9')}>X</Button>
                                        <img className='constel-modal-img' src={sagitarrius} alt=''></img>
                                        <h1> Sagittarius
                                        <p className='constel-text'> Date of Birth: November 23 - December 21 </p>
                                        </h1>
                                    </figure>
                                </div>
                            </Modal>

                            <img className='constel-page-img' onClick={() => this.handleShow('show12')} src={pisces} alt='' />
                            <Modal show={this.state.show12} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show12')}>
                                    </div>
                                    <figure className='constel-modal' >
                                        <Button className='close-modal' onClick={() => this.handleClose('show12')}>X</Button>
                                        <img className='constel-modal-img' src={pisces} alt=''></img>
                                        <h1> Pisces
                                        <p className='constel-text'> Date of Birth: February 19 - March 20 </p>
                                        </h1>
                                    </figure>
                                </div>
                            </Modal>


                        </div>
                        Constellations
                    </figure>
                </div>
            </div >
        );
    }
}








