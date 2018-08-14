import './common/common.css'
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from './common/components/loading'
import Header from './header/header'
import { Layout } from 'antd'

const Home = Loadable({ loader: () => import('./home/home'), loading: Loading })
const About = Loadable({ loader: () => import('./static/about'), loading: Loading })
const Create = Loadable({ loader: () => import('./create/create'), loading: Loading })

class App extends Component {
    render() {
        return (
            <div className="app">
                <Layout>
                    <Header />
                    <Layout className="main">
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/about' component={About} />
                            <Route exact path='/create' component={Create} />
                            {/* <Route path='/draft/:subjectId' component={Page} /> */}
                            {/* <Route path='/draft/:subjectId/t/:topicId' component={Page} /> */}
                            {/* <Route path='/s/:subjectId' component={Page} /> */}
                            {/* <Route path='/s/:subjectId/t/:topicId' component={Page} /> */}
                            <Redirect path="*" to="/" />
                        </Switch>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default App
