import './page.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect, isLoaded } from 'react-redux-firebase'
import { update, remove } from './actions'
import ContentForm from './components/content'
import RemoveButton from './components/remove'
import NotFound from '../common/components/404'
import Spinner from '../common/components/spinner'

export class Page extends Component {
    render() {
        const { uid, page, requested, match, update, remove } = this.props
        const pageId = match.params.pageId

        const missing = !isLoaded(page) && requested[`users/${uid}/pages/${pageId}`]
        if (missing) return <NotFound />

        if (isLoaded(page)) {
            return (
                <div className="page">
                    <h1>{page.title}</h1>
                    <p>{page.content}</p>
                    <ContentForm update={(data) => update(data, pageId)} />
                    <RemoveButton remove={() => remove(pageId)} />
                </div>
            )
        } else return <Spinner size="big" />
    }
}

const mapState = state => ({
    uid: state.firebase.auth.uid,
    page: state.firestore.data.page,
    requested: state.firestore.status.requested
})

const actions = {
    update, remove
}

const query = props => [{
    collection: 'users',
    doc: props.uid || 'guest',
    subcollections: [{
        collection: 'pages',
        doc: props.match.params.pageId
    }],
    storeAs: 'page'
}]

export default connect(mapState, actions)(firestoreConnect(query)(Page))
