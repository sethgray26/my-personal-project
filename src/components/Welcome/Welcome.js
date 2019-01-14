import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }




    render() {
        return (
            <div>
                <p>
                    <Link to='homepage'><button> Continue Without Logging In</button></Link>
                </p>
                <hr />
                <p>
                    <span> Username: </span>
                    <input />
                </p>
                <hr />
                <p>
                    <span> Password: </span>
                    <input />
                </p>
                <hr />
            </div>
        )
    }
}