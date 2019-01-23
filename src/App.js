import React, { Component } from 'react';
import './App.scss';
import routes from './routes'

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
      <div className="App">
        {routes}
        <div className='particles'>
          <div className='darkCover'>
            <Particles
                params={{
                  "particles": {
                    "number": {
                      "value": 700,
                      "density": {
                        "enable": true,
                        "value_area": 6000,
                      },
                    },
                    "color": {
                      "value": "#ffffb3"
                    },
                    "line_linked": {
                      "enable": true,
                      "opacity": .1,
                      "bounce": false,
                    },
                    "move": {
                      'out_mode': 'out',
                      "direction": "bottom-left",
                      "speed": .5,
                      "bounce": false
                    },
                    "size": {
                      "value": 4
                    },
                    "opacity": {
                      "anim": {
                        "enable": true,
                        "speed": 4,
                        "opacity_min": 0.09
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

export default App;
