import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { render } from '../../common/tools/form'
import { Form, Icon, Input, Button, Alert } from 'antd'
const InputField = render(Input)

class SignUpForm extends Component {
    render() {
        const { signup, error, handleSubmit, submitting } = this.props
        
        return (
            <Form onSubmit={handleSubmit(signup)}>
                {error && <Alert className="error" type="warning" message={error} showIcon />}
                <Field
                    name="name"
                    type="name"
                    component={InputField}
                    prefix={<Icon type="user" />}
                    placeholder="Name"
                />
                <Field
                    name="email"
                    type="email"
                    component={InputField}
                    prefix={<Icon type="mail" />}
                    placeholder="Email"
                />
                <Field
                    name="password"
                    type="password"
                    component={InputField}
                    prefix={<Icon type="lock" />}
                    placeholder="Password"
                />
                <Button className="form-button" type="primary" loading={submitting} htmlType="submit">Sign Up</Button>
            </Form>
        )
    }
}

export default reduxForm({ form: 'signUpForm' })(SignUpForm)