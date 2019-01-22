import React, { Component } from 'react'
import axios from 'axios'




export default class ProfileBio extends Component {
    constructor(props, res) {
        super(props, res)
        this.state = {
            bio: '',
            bioUpdate: ''
        }
    }

    componentDidMount() {
        this.getBio()
    }

    getBio = () => {
        axios.get(`/api/bio`).then(res => {
            this.setState({ bio: res.data[0].bio })
        })
    }

    updateBio = () => {
        axios.put(`/api/bio`, { updateBio: this.state.bioUpdate }).then(res => {
            this.setState({ bio: res.data })
        })
    }

    handleUpdate(updateText) {
        this.setState({ bioUpdate: updateText })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.bio}
                <input onChange={(e) => this.handleUpdate(e.target.value)}></input>
                <button onClick={() => this.updateBio()}> Edit Bio Info </button>
            </div>
        )
    }
}