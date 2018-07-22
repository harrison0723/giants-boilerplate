import { SubmissionError, reset } from 'redux-form'
import { SystemError } from '../common/tools/error'
import history from '../common/tools/history'

export const update = (data, pageId) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            let currentUser = await getFirebase().auth().currentUser
            await getFirestore()
                .collection('users')
                .doc(currentUser.uid)
                .collection('pages')
                .doc(pageId)
                .update({ content: data.content })
            dispatch(reset('contentForm'))
        } catch (error) {
            throw new SubmissionError({ _error: error.message })
        }
    }
}

export const remove = (pageId) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            let currentUser = await getFirebase().auth().currentUser
            history.push('/create')
            getFirestore()
                .collection('users')
                .doc(currentUser.uid)
                .collection('pages')
                .doc(pageId)
                .delete()
        } catch (error) {
            SystemError(error)
        }
    }
}
