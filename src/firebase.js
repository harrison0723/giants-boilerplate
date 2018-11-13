import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBYZ_zURjItIRX9TDYdOCkwYW1T1R1ubI4",
    authDomain: "giants-app.firebaseapp.com",
    databaseURL: "https://giants-app.firebaseio.com",
    projectId: "giants-app",
    storageBucket: "giants-app.appspot.com",
    messagingSenderId: "1030865238502"
}

firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)

export default firebase