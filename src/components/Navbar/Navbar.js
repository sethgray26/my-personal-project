import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import starhome from '../../photos/starhome.jpg'

// NEED TO GET USERS NAME AND PICTURE TO DISPLAY WHEN LOGGED In

export function Navbar(props) {
    return (<div>
        <div>
            <Link to='profile'>  <img src={props.profile_pic} alt='' /> </Link>
            {props.username}
        </div>
        <Link to='constellations'> <img src={starhome} alt='home-page'></img> </Link>
        {/* <Link to='homepage'> <button> Home Page</button> </Link> */}
        <Link to='profile'> <button> Profile </button> </Link>
        <Link to='constellations'> <button> Constellations </button> </Link>
        <Link to='planets'> <button> Planets </button> </Link>
        <Link to='galaxies'> <button> Galaxies </button> </Link>
        <a href='http://localhost:3000/welcome/logout'> <button> Logout </button> </a>
    </div>
    )
}







const mapState = (reduxState) => {
    return {
        username: reduxState.username,
        profile_pic: reduxState.profile_pic
    }
}

export default connect(mapState)(Navbar)