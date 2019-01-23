import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

import axios from 'axios';





export default class ConstelOne extends Component {
    constructor() {
        super()
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
        axios.post(`/api/favorites/constel`, { constel_id: this.props.constel.constel_id })
    }



    render() {
        console.log(this.props.constel)
        const { constel } = this.props
        return (
            <div>
                <div>
                    <h1>
                        {constel.constel_name}
                    </h1>
                    <img className='constel-page-img' onClick={() => this.handleShow('show1')} src={constel.constel_pic} alt='' />
                </div>

                <Modal className='modalWindow' show={this.state.show1}>
                    <div className='background'>
                        <div className='backdrop' onClick={() => this.handleClose('show1')}>
                        </div>
                        <figure className='constel-modal' >
                            <Button className='close-modal' onClick={() => this.handleClose('show1')}>X</Button>
                            {this.props.profile === true
                                ?
                                <Button className='favorite-btn' onClick={() => this.props.deleteFromFaves()}> Delete </Button>
                                :
                                <Button className='favorite-btn' onClick={() => this.addToFaves(constel.constel_id)}> Favorite </Button>
                            }
                            <img className='constel-modal-img' src={constel.constel_pic} alt=''></img>
                            <h1 className='constel-name'> {constel.constel_name}
                                <hr />
                            </h1>
                            <p className='constel-text'>Date of Birth: March 21 -April 19</p>
                            <p className='constel-descript'> {constel.description}  </p>
                        </figure>
                    </div>
                </Modal>
            </div>

        )
    }
}