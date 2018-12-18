import React from 'react'
import Spinner from './spinner'

const Loading = ({ pastDelay, error }) => {
    if (pastDelay) {
        return <Spinner size="big" />
    }
    else if (error) {
        return <div className="loading-error"><h1>Sorry, there was a problem loading the page.</h1></div>
    }
    else {
        return null
    }
}

export default Loading