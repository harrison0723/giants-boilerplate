import './nav.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect, isLoaded } from 'react-redux-firebase'
import { Link, withRouter } from 'react-router-dom'
import { signout } from '../auth/actions'
import Logo from './components/logo'
import Options from './components/options'
import Spinner from '../common/components/spinner'
import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout

export class Nav extends Component {
    render() {
        const { signout, location, auth, pages } = this.props
        const authenticated = auth.isLoaded && !auth.isEmpty

        return (
            <div className="nav">
                <Sider theme="light" className="sider">
                    <Logo />
                    {authenticated && <Options email={auth.email} signout={signout} />}
                    <Menu theme="light" mode="inline" selectedKeys={[location.pathname]}>
                        <Menu.Item key="/">
                            <Link to='/'>
                                <Icon type="home" />
                                <span className="nav-text">Home</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/create">
                            <Link to='/create'>
                                <Icon type="plus-circle-o" />
                                <span className="nav-text">Create</span>
                            </Link>
                        </Menu.Item>
                        {(!isLoaded(pages)) ? <Spinner /> : pages.map(page => {
                            return (
                                <Menu.Item key={'/pages/' + page.id}>
                                    <Link to={'/pages/' + page.id}>
                                        <Icon type="file-text" />
                                        <span className="nav-text">{page.title}</span>
                                    </Link>
                                </Menu.Item>
                            )
                        })}
                    </Menu>
                </Sider>
            </div>
        )
    }
}

const mapState = state => ({
    auth: state.firebase.auth,
    pages: state.firestore.ordered.pages
})

const actions = {
    signout
}

const query = props => [{
    collection: 'users',
    doc: props.auth.uid || 'guest',
    subcollections: [{
        collection: 'pages'
    }],
    storeAs: 'pages'
}]

export default withRouter(connect(mapState, actions)(firestoreConnect(query)(Nav)))
