import './common/common.css'
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from './common/components/loading'
import Nav from './nav/nav'
import { Layout } from 'antd'

const Home = Loadable({ loader: () => import('./home/home'), loading: Loading })
const Create = Loadable({ loader: () => import('./create/create'), loading: Loading })
const Page = Loadable({ loader: () => import('./page/page'), loading: Loading })

class App extends Component {
    render() {
        return (
            <div className="app">
                <Layout>
                    <Nav />
                    <Layout className="main">
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/create' component={Create} />
                            <Route path='/pages/:pageId' component={Page} />
                            <Redirect path="*" to="/" />
                        </Switch>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default App
