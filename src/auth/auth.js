import './auth.css'
import React, { Component } from "react"
import { connect } from 'react-redux'
import { login, signup } from './actions'
import LoginForm from './components/login'
import SignUpForm from './components/signup'
import { Card, Tabs } from 'antd'
const TabPane = Tabs.TabPane

export class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTabKey: "login",
        }
        this.handleTabChange = this.handleTabChange.bind(this)
    }

    handleTabChange(activeTabKey) {
        this.setState({ activeTabKey })
    }

    render() {
        const { login, signup } = this.props
        
        return (
            <div className="auth">
                <Tabs cldefaultActiveKey="login" onChange={this.handleTabChange}>
                    <TabPane tab="Login" key="login">
                        <Card bordered={false}>
                            <LoginForm login={login} />
                        </Card>
                    </TabPane>
                    <TabPane tab="Sign Up" key="signup">
                        <Card bordered={false}>
                            <SignUpForm signup={signup} />
                        </Card>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

const actions = {
    login, signup
}

export default connect(null, actions)(Auth)
