import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

import axios from 'axios';


export default class GalaxyOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show1: false
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(show) {
        this.setState({ [show]: false });
        // window.scrollTo(50, 50)
    }

    handleShow(show) {
        this.setState({ [show]: true });
        window.scrollTo(0, 0)
    }

    addToFaves() {
        axios.post(`/api/favorites/galaxies`, { galaxy_id: this.props.galaxy.galaxy_id })
    }



    render() {
        console.log(this.props)
        const { galaxy } = this.props
        return (
            <div>
                <div>
                    <h1>
                        {galaxy.galaxy_name}
                    </h1>
                    <img className='galaxy_pic_img' onClick={() => this.handleShow('show1')} src={galaxy.galaxy_pic} alt='' />
                </div>

                <Modal className='modalWindow' show={this.state.show1}>
                    <div className='galaxyBackground'>
                        <div className='galaxyBackdrop' onClick={() => this.handleClose('show1')}>
                        </div>
                        <figure className='galaxy-modal' >
                            <Button className='close-modal' onClick={() => this.handleClose('show1')}>X</Button>
                            {this.props.profile === true
                                ?
                                <Button className='favorite-btn' onClick={() => this.props.deleteFromFaves()}> Delete </Button>
                                :
                                <Button className='favorite-btn' onClick={() => this.addToFaves(galaxy.galaxy_id)}> Favorite </Button>
                            }
                            <img className='galaxy-modal-img' src={galaxy.galaxy_pic} alt=''></img>
                            <h1 className='galaxy-name'> {galaxy.galaxy_name}
                                <hr />
                            </h1>
                            <p className='galaxy-text'></p>
                            <p className='galaxy-descript'> {galaxy.description}  </p>
                        </figure>
                    </div>
                </Modal>
            </div>

        )
    }
}