import React, { Component } from 'react';
import './App.scss';
import routes from './routes'

import Particles from 'react-particles-js'




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
          <Particles
            params={{
              "particles": {
                "number": {
                  "value": 120,
                  "density": {
                    "enable": true,
                    "value_area": 1000
                  }
                },
                "line_linked": {
                  "enable": true,
                  "opacity": .1,
                  "bounce": false,
                },
                "move": {
                  'out_mode': 'out',
                  "direction": "bottom",
                  "speed": 1,
                  "bounce": false
                },
                "size": {
                  "value": 1
                },
                "opacity": {
                  "anim": {
                    "enable": true,
                    "speed": 3,
                    "opacity_min": 0.09
                  }
                }
              },
              "interactivity": {
                "events": {
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  }
                },
                "modes": {
                  "push": {
                    "particles_nb": 1
                  }
                }
              }
            }} />
        </div>
      </div>
    );
  }
}

export default App;
