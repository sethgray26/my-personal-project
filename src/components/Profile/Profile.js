import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { connect } from 'react-redux'
import axios from 'axios';


// export class Profile extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             username: '',
//             profile_pic: ''
//         }

//     }
//     // componentDidMount() {
//     //     const { username, profile_pic } = this.state
//     //     axios.get('/api/profile', { username: username, profile_pic: profile_pic })
//     // }
//     render(props) {
//         return (
//             <div>
//                 <Navbar />

//                 Profile
//             </div>
//         )
//     }
// }

export function Profile(props) {
    return (
        <div>
            <Navbar />
            <img src={props.profile_pic} alt='' />
            {props.username}
        </div>
    )
}



const mapState = (reduxState) => {
    return {
        username: reduxState.username,
        profile_pic: reduxState.profile_pic
    }
}

export default connect(mapState)(Profile)