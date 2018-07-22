import './home.css'
import React, { Component } from "react"
import { connect } from 'react-redux'
import Auth from '../auth/auth'

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1>Hallo Welt!</h1>
                <Auth />
            </div>
        )
    }
}

export default connect(null, null)(Home)
