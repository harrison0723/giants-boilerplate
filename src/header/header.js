import './header.css'
import React, { Component } from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Auth from '../auth/auth'
import { signout } from '../auth/actions'   
import Options from './components/options'
import Logo from '../common/components/logo'
import { Popover, Button, Icon } from 'antd'

export class Header extends Component {
    render() {
        const { signout, auth } = this.props
        const authenticated = auth.isLoaded && !auth.isEmpty        

        return (
            <div className="header">
                <div className="header-left-item">
                {
                    authenticated ?
                    <Popover placement="bottomLeft" content={<div>Collections</div>} trigger="click">
                        <Button type="primary" ghost>Collections</Button>
                    </Popover>
                    :
                    <Link to='/about'>About Walnut.pe</Link>
                }
                </div>
                <Logo />
                <div className="header-right-item">
                {
                    authenticated ?
                    <Options email={auth.email} signout={signout} />
                    :
                    <Popover placement="bottomRight" content={<Auth />} trigger="click">
                        <a href="true" className="ant-dropdown-link">
                            Login or sign up <Icon type="down" />
                        </a>
                    </Popover>
                }
                </div>
            </div >
        )
    }
}

const mapState = state => ({
    auth: state.firebase.auth
})

const actions = {
    signout
}

export default connect(mapState, actions)(Header)
