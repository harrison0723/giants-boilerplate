import { SubmissionError } from 'redux-form'
import history from '../common/tools/history'

export const create = (data) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            let currentUser = await getFirebase().auth().currentUser
            let page = await getFirestore()
                .collection('users')
                .doc(currentUser.uid)
                .collection('pages')
                .add({ title: data.title })
            history.push('/pages/' + page.id)
        } catch (error) {
            throw new SubmissionError({ _error: error.message })
        }
    }
}
