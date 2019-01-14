import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome'
import HomePage from './components/HomePage/HomePage'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Constellations from './components/Constellations/Constel'
import Planets from './components/Planets/Planets'
import Galaxy from './components/Galaxy/Galaxy'





class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <HomePage />
        <Navbar />
        <Profile />
        <Constellations />
        <Planets />
        <Galaxy />
      </div>
    );
  }
}

export default App;
