import * as firebase from 'firebase'
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBteOTd474v__zYRIEdOhXvlHM_VUmOcmk",
    authDomain: "myolxreplica.firebaseapp.com",
    databaseURL: "https://myolxreplica.firebaseio.com",
    projectId: "myolxreplica",
    storageBucket: "myolxreplica.appspot.com",
    messagingSenderId: "523233506620",
    appId: "1:523233506620:web:14b98e1149238997679a39",
    measurementId: "G-6LS7TTGKXH"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase