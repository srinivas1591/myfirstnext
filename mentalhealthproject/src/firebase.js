import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyDPWLbEXxLt6bDJxBF0gTh6z8VdzfaofYU",
  authDomain: "mhtc-dc393.firebaseapp.com",
  projectId: "mhtc-dc393",
  storageBucket: "mhtc-dc393.appspot.com",
  messagingSenderId: "849123636279",
  appId: "1:849123636279:web:c3d5342804245c06f57bb2"
})


export default firebaseapp
export const auth = firebaseapp.auth()
