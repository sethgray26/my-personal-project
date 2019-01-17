import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { getUserData } from '../../ducks/reducer'
import './Welcome.scss'



class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    async register() {
        const { username, password } = this.state
        const res = await axios.post('/welcome/register', { username: username, password: password })
        if (res.data.loggedIn) {
            this.props.history.push('/homepage')
        }
        this.props.getUserData(res.data.userData.username, res.data.userData.id, res.data.userData.profile_pic)
    }
    async login() {
        const { username, password } = this.state
        const res = await axios.post('/welcome/login', { username: username, password: password })
        if (res.data.loggedIn) {
            this.props.history.push('/homepage')
        }
        this.props.getUserData(res.data.userData.username, res.data.userData.id, res.data.userData.profile_pic)
    }


    render() {
        return (
            <div>

                <div id='welcomeBox'>
                    <p className='no-login'>
                        <Link to='homepage'><button> Continue Without Logging In</button></Link>
                    </p>
                    <hr />
                    <p className='username'>
                        <span> Username: </span>
                        <input onChange={(e) => this.setState({ username: e.target.value })} />
                    </p>
                    <hr />
                    <p>
                        <span> Password: </span>
                        <input onChange={(e) => this.setState({ password: e.target.value })} />
                    </p>
                    <hr />
                    <button onClick={() => this.register()}> Register </button>
                    <button onClick={() => this.login()}> Login </button>

                    
                </div>

            </div>
        )
    }
}



export default connect(null, { getUserData })(Welcome)

