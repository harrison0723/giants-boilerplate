import { SubmissionError } from 'redux-form'
import history from '../common/tools/history'
import { SystemError } from '../common/tools/error'

export const login = (creds) => {
    return async (dispatch, getState, { getFirebase }) => {
        try {
            await getFirebase().auth().signInWithEmailAndPassword(creds.email, creds.password)
            history.push('/create')
        } catch (error) {
            if (error.code === "auth/argument-error") throw new SubmissionError({ _error: "Missing field... did you type in everything?" })
            else throw new SubmissionError({ _error: error.message })
        }
    }
}

export const signup = (creds) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            // Create the user in Firebase
            let userForFirebase = await getFirebase().auth().createUserWithEmailAndPassword(creds.email, creds.password)
            // Create the user in Firestore
            let userForFirestore = {
                name: creds.name,
                email: creds.email,
                createdAt: getFirestore().FieldValue.serverTimestamp()
            }
            await getFirestore().collection('users').doc(userForFirebase.user.uid).set(userForFirestore)
            history.push('/create')
        } catch (error) {
            if (error.code === "auth/argument-error") throw new SubmissionError({ _error: "Missing field... did you type in everything?" })
            else throw new SubmissionError({ _error: error.message })
        }
    }
}

export const signout = () => {
    return async (dispatch, getState, { getFirebase }) => {
        try {
            await getFirebase().auth().signOut()
            history.push('/')
        } catch (error) {
            SystemError(error)
        }
    }
}