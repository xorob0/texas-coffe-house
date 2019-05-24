import firebase from "firebase"

const config = {
  apiKey: "AIzaSyAF0ua8bIh3SVrRW8jmH2aAEKLby08aDEo",
  authDomain: "texas-64dfd.firebaseapp.com",
  databaseURL: "https://texas-64dfd.firebaseio.com",
  projectId: "texas-64dfd",
  storageBucket: "texas-64dfd.appspot.com",
  messagingSenderId: "475572786003",
  appId: "1:475572786003:web:1a32ebcfd88047f1",
}
firebase.initializeApp(config)
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const facebookProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export default firebase
