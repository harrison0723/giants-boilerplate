import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import history from './common/tools/history'
import App from './app'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

const root = document.getElementById('root')

const render = Component => {
    return ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <Component />
            </Router>
        </Provider>,
        root
    )
}

if (module.hot) {
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default
        render(NextApp)
    })
}

store.firebaseAuthIsReady.then(() => render(App))

registerServiceWorker()
