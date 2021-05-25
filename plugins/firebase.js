import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "AIzaSyDRUFX2Jsf1zugiiRy2ZvkwaojZBon74ME",
        authDomain: "apptest-c48ec.firebaseapp.com",
        projectId: "apptest-c48ec",
        storageBucket: "apptest-c48ec.appspot.com",
        messagingSenderId: "40961725946",
        appId: "1:40961725946:web:eec126f30a501806d08043",
        measurementId: "G-Q260REV8H6"
    }
  )
}

export default firebase