import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

import axios from 'axios';


export default class PlanetOne extends Component {
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
        axios.post(`/api/favorites/planets`, { planet_id: this.props.planet.planet_id })
    }



    render() {
        console.log(this.props)
        const { planet } = this.props
        return (
            <div>
                <div>
                    <h1>
                        {planet.planet_name}
                    </h1>
                    <img className='planet-page-img' onClick={() => this.handleShow('show1')} src={planet.planet_pic} alt='' />
                </div>

                <Modal className='modalWindow' show={this.state.show1}>
                    <div className='planetBackground'>
                        <div className='planetBackdrop' onClick={() => this.handleClose('show1')}>
                        </div>
                        <figure className='planet-modal' >
                            <Button className='close-modal' onClick={() => this.handleClose('show1')}>X</Button>
                            {this.props.profile === true
                                ?
                                <Button className='favorite-btn' onClick={() => this.props.deleteFromFaves()}> Delete </Button>
                                :
                                <Button className='favorite-btn' onClick={() => this.addToFaves(planet.planet_id)}> Favorite </Button>
                            }
                            <img className='planet-modal-img' src={planet.planet_pic} alt=''></img>
                            <h1 className='planet-name'> {planet.planet_name}
                                <hr />
                            </h1>
                            <p className='planet-text'> Some Information On This Planet </p>
                            <p className='planet-descript'> {planet.description}  </p>
                        </figure>
                    </div>
                </Modal>
            </div>

        )
    }
}































// import React, { Component } from 'react'
// import { Modal, Button } from 'react-bootstrap'

// import axios from 'axios';





// export default class PlanetOne extends Component {
//     constructor() {
//         super()
//         this.state = {
//             show1: false
//         }
//         this.handleShow = this.handleShow.bind(this);
//         this.handleClose = this.handleClose.bind(this);
//     }

//     handleClose(show) {
//         this.setState({ [show]: false });
//         // window.scrollTo(50, 50)
//     }

//     handleShow(show) {
//         this.setState({ [show]: true });
//         window.scrollTo(0, 0)
//     }

//     addToFaves() {
//         axios.post(`/api/favorites/planets`, { planet_id: this.props.planets.planet_id })
//     }



//     render() {
//         console.log(this.props.planets)
//         const { planets } = this.props
//         return (
//             <div>
//                 <div>
//                     <h1>
//                         {planets.planet_name}
//                     </h1>
//                     <img className='planet-page-img' onClick={() => this.handleShow('show1')} src={planets.planet_pic} alt='' />
//                 </div>

//                 <Modal className='modalWindow' show={this.state.show1}>
//                     <div className='background'>
//                         <div className='backdrop' onClick={() => this.handleClose('show1')}>
//                         </div>
//                         <figure className='planet-modal' >
//                             <Button className='close-modal' onClick={() => this.handleClose('show1')}>X</Button>
//                             {this.props.profile === true
//                                 ?
//                                 <Button className='favorite-btn' onClick={() => this.props.deleteFromFaves()}> Delete </Button>
//                                 :
//                                 <Button className='favorite-btn' onClick={() => this.addToFaves(planets.planet_id)}> Favorite </Button>
//                             }
//                             <img className='planet-modal-img' src={planets.planet_pic} alt=''></img>
//                             <h1 className='planet-name'> {planets.planet_name}
//                                 <hr />
//                             </h1>
//                             <p className='planet-text'>Date of Birth: March 21 -April 19</p>
//                             <p className='planet-descript'> {planets.description}  </p>
//                         </figure>
//                     </div>
//                 </Modal>
//             </div>

//         )
//     }
// }