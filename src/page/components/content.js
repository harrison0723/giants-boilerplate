import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { render } from '../../common/tools/form'
import { Form, Input, Button, Alert } from 'antd'
const InputField = render(Input.TextArea)

class ContentForm extends Component {
    render() {
        const { update, error, handleSubmit, submitting, pristine } = this.props

        return (
            <Form onSubmit={handleSubmit(update)}>
                {error && <Alert className="error" type="warning" message={error} showIcon />}
                <Field
                    name="content"
                    type="text"
                    component={InputField}
                    placeholder="Content"
                    autoComplete="off"
                    autosize={{ minRows: 4 }}
                />
                <Button className="form-button" type="primary" disabled={pristine} loading={submitting} htmlType="submit">Update</Button>
            </Form>
        )
    }
}

export default reduxForm({ form: 'contentForm' })(ContentForm)