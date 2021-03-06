import React, { Component } from 'react';
import './App.scss';
import routes from './routes'

import { withRouter } from 'react-router-dom'
import Particles from 'react-particles-js'
// import { yellow100 } from 'material-ui/styles/colors';




class App extends Component {

  componentDidMount() {
    var x = document.getElementsByTagName('canvas')[0]
    console.log(x)
    x.height = window.innerHeight
  }
  render() {
    return (
      <div className={this.props.location.pathname === '/constellations'
        ?
        'App constellationBackground '
          :
          'App'
      }>
        {routes}
        <div className='particles'>
          <div className='darkCover'>
            <Particles
              params={{
                "particles": {
                  "number": {
                    "value": 600,
                    "density": {
                      "enable": true,
                      "value_area": 6000,
                    },
                  },
                  "color": {
                    "value": "#ffffff"
                  },
                  "line_linked": {
                    "enable": true,
                    "opacity": .1,
                    "bounce": false,
                  },
                  "move": {
                    'out_mode': 'out',
                    "direction": "bottom-left",
                    "speed": .2,
                    "bounce": false
                  },
                  "size": {
                    "value": 4
                  },
                  "opacity": {
                    "anim": {
                      "enable": true,
                      "speed": 2,
                      "opacity_min": 0
                    }
                  }
                },
                "interactivity": {
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "bubble"
                    }
                  },
                  "modes": {
                    // "push": {
                    //   "particles_nb": 1
                    // },
                    "bubble": {
                      "size": 10,
                      "distance": 200
                    }
                  }
                }
              }} />
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default withRouter(App);