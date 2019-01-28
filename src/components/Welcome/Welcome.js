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
        this.props.getUserData(res.data.userData.username, res.data.userData.id, res.data.userData.profile_pic, res.data.userData.favorites)
    }


    render() {
        return (
            <div>
                <div className='backgroundWelcome' >
                    <span >
                        <h1 className='starChart'>
                            Star Chart
                    </h1>
                    </span>

                    <div id='welcomeBox'>

                        <div className='username'>
                            <span > Username: </span>
                            <input className='user-input' onChange={(e) => this.setState({ username: e.target.value })} />
                        </div>

                        <div className='password'>
                            <span > Password: </span>
                            <input className='pass-input' type='password' onChange={(e) => this.setState({ password: e.target.value })} />
                        </div>

                        <div className='register-login'>
                            <button className='register' onClick={() => this.register()}> Register </button>
                            <button className='login' onClick={() => this.login()} > Login </button>
                        </div>
                        <div className='continue'>
                            <Link to='homepage'><button className='continue-btn'> Continue Without Logging In</button></Link>
                        </div>

                    </div>
                </div>

            </div >
        )
    }
}



export default connect(null, { getUserData })(Welcome)

