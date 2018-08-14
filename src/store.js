import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import firebaseConfig from './firebase'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const reactReduxFirebaseConfig = {
    userProfile: 'users',
    attachAuthIsReady: true,
    useFirestoreForProfile: true,
    updateProfileOnLogin: false
}

export const configureStore = (preloadedState) => {
    const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })]
    const middlewareEnhaner = applyMiddleware(...middlewares)

    const storeEnhancers = [middlewareEnhaner]

    const composedEnhancer = composeWithDevTools(
        ...storeEnhancers, 
        reactReduxFirebase(firebaseConfig, reactReduxFirebaseConfig),
        reduxFirestore(firebaseConfig)
    )

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    )

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('./reducer', () => {
                store.replaceReducer(rootReducer)
            })
        }
    }

    return store
}