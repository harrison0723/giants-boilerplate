import { notification } from 'antd'

export const SystemError = (error) => {
    notification['error']({
        message: 'An error occured',
        description: 'Please refresh and try again. If this persists, please reach out to support with the following error message: ' + error.message,
    })
}
