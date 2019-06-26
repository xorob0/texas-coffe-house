import firebase from "firebase"
import { addSub } from "./functions"

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
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const auth = firebase.auth()
export const changePointsUser = (uid, points, add) => {
  const ref = firebase.database().ref(uid)
  ref
    .once("value")
    .then(snapshot => addSub(snapshot.val().total || 0, points, add))
    .then(total => {
      if (total <= 0) {
        window.alert(`Error: Not enough points`)
      }
      ref.update({ total })
    })
    .catch(err => window.alert(`Error: ${err}`))
}
export default firebase
export const signOut = () => {
  firebase.auth().signOut()
}
