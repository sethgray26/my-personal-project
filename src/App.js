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
          <div className='darkCover'>
            <Particles
              params={{
                "particles": {
                  "number": {
                    "value": 500,
                    "density": {
                      "enable": true,
                      "value_area": 10000
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "opacity": .1,
                    "bounce": false,
                  },
                  "move": {
                    'out_mode': 'none',
                    "direction": "none",
                    "speed": 0,
                    "bounce": false
                  },
                  "size": {
                    "value": 3
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
      </div>
    );
  }
}

export default App;
