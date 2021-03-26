import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAza0YPByfEeNqDIYIKoMA_V4AMWX-jCd8",
    authDomain: "motorcycleblog-6df56.firebaseapp.com",
    projectId: "motorcycleblog-6df56",
    storageBucket: "motorcycleblog-6df56.appspot.com",
    messagingSenderId: "176812876256",
    appId: "1:176812876256:web:1c1ba0ddeef670c4f0cb85"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;