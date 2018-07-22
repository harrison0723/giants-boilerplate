import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { render } from '../../common/tools/form'
import { Form, Input, Button, Alert } from 'antd'
const InputField = render(Input)

class TitleForm extends Component {
    render() {
        const { create, authenticated, error, handleSubmit, submitting, pristine } = this.props

        return (
            <Form onSubmit={handleSubmit(create)}>
                {error && <Alert className="error" type="warning" message={error} showIcon />}
                <Field
                    size="large"
                    name="title"
                    type="text"
                    component={InputField}
                    placeholder="Title"
                    autoComplete="off"
                />
                <Button className="form-button" type="primary" disabled={!authenticated || pristine} loading={submitting} htmlType="submit">
                    {authenticated ? 'Create' : 'Login to Create'}
                </Button>
            </Form>
        )
    }
}

export default reduxForm({ form: 'titleForm' })(TitleForm)