import React, { Component } from 'react';
import './App.css';
// import Navbar from './components/Navbar/Navbar'
// import Welcome from './components/Welcome/Welcome'
// import Homepage from './components/HomePage/Homepage'
// import Profile from './components/Profile/Profile'
// import Constellations from './components/Constellations/Constel'
// import Planets from './components/Planets/Planets'
// import Galaxies from './components/Galaxies/Galaxies'
import routes from './routes'





class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Welcome />
        <Homepage />
        <Profile />
        <Constellations />
        <Planets />
        <Galaxies /> */}
        {/* <Navbar /> */}
        {routes}
      </div>
    );
  }
}

export default App;
