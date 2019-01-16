import React, { Component } from 'react'
import './Constel.css'
import Navbar from '../../components/Navbar/Navbar'
import constel1 from '../../photos/constel1.jpg'
import constel2 from '../../photos/constel2.jpg'
import constel3 from '../../photos/constel3.jpg'

import { Modal, Button } from 'react-bootstrap'
// import Particles from 'react-particles-js'


export default class Constellations extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show1: false,
            show2: false
        };
    }

    // componentDidMount() {
    //     var x = document.getElementsByTagName('canvas')[0]
    //     console.log(x)
    //     x.height = window.innerHeight
    // }

    handleClose(show) {
        this.setState({ [show]: false });
    }

    handleShow(show) {
        this.setState({ [show]: true });
    }

    render() {
        return (
            <div>
                <div className='particles'>
                    <Navbar />

                    <figure id='constellation-container'>
                        <div className='constel-left-row'>
                            <div >
                                <button onClick={() => this.handleShow('show1')}> <img src={constel1} alt='constel1'></img></button>
                                <Modal show={this.state.show1} >
                                    <div className='backdrop' onClick={() => this.handleClose('show1')}>
                                        <figure className='constel1-modal' >
                                            <Button className='close-modal' onClick={() => this.handleClose('show1')}>X</Button>
                                            <img className='constel1-modal-img' src={constel1} alt=''></img>
                                            <p className='constel1-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique et egestas. Vel eros donec ac odio tempor orci. Sit amet risus nullam eget felis. Curabitur gravida arcu ac tortor dignissim convallis. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. In iaculis nunc sed augue lacus viverra vitae. Gravida rutrum quisque non tellus. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Eget arcu dictum varius duis at consectetur lorem. Nisi est sit amet facilisis magna etiam tempor orci. Ante in nibh mauris cursus mattis molestie a iaculis. Non blandit massa enim nec dui nunc. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Mauris cursus mattis molestie a iaculis at erat pellentesque.</p>
                                        </figure>
                                    </div>
                                </Modal>
                            </div>
                        </div>

                        <div className='constel-middle-row'>
                            <div >
                                <button onClick={() => this.handleShow('show2')}> <img src={constel2} alt='constel2'></img></button>
                                <Modal show={this.state.show2} >
                                    <div className='backdrop' onClick={() => this.handleClose('show2')}>
                                        <figure className='constel2-modal'>
                                            <Button className='close-modal' onClick={() => this.handleClose('show2')}>X</Button>
                                            <img className='constel2-modal-img' src={constel2} alt=''></img>
                                            <p className='constel2-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique et egestas. Vel eros donec ac odio tempor orci. Sit amet risus nullam eget felis. Curabitur gravida arcu ac tortor dignissim convallis. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. In iaculis nunc sed augue lacus viverra vitae. Gravida rutrum quisque non tellus. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Eget arcu dictum varius duis at consectetur lorem. Nisi est sit amet facilisis magna etiam tempor orci. Ante in nibh mauris cursus mattis molestie a iaculis. Non blandit massa enim nec dui nunc. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Mauris cursus mattis molestie a iaculis at erat pellentesque.</p>
                                        </figure>
                                    </div>
                                </Modal>
                            </div>
                        </div>

                        <div className='constel-right-row'>
                            <div >
                                <button onClick={() => this.handleShow('show3')}> <img src={constel3} alt='constel3'></img></button>
                                <Modal show={this.state.show3} >
                                    <div className='backdrop' onClick={() => this.handleClose('show3')}>
                                        <figure className='constel3-modal'>
                                            <Button className='close-modal' onClick={() => this.handleClose('show3')}>X</Button>
                                            <img className='constel3-modal-img' src={constel3} alt=''></img>
                                            <p className='constel3-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique et egestas. Vel eros donec ac odio tempor orci. Sit amet risus nullam eget felis. Curabitur gravida arcu ac tortor dignissim convallis. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. In iaculis nunc sed augue lacus viverra vitae. Gravida rutrum quisque non tellus. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Eget arcu dictum varius duis at consectetur lorem. Nisi est sit amet facilisis magna etiam tempor orci. Ante in nibh mauris cursus mattis molestie a iaculis. Non blandit massa enim nec dui nunc. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Mauris cursus mattis molestie a iaculis at erat pellentesque.</p>
                                        </figure>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                        Constellations
                    </figure>
                </div>
            </div >
        );
    }
}