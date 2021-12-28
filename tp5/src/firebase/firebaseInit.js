

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4GpdQZKFVpOKy2dUgW2xMPDSaZsBsZyM",
    authDomain: "weatherapp-c9cf6.firebaseapp.com",
    projectId: "weatherapp-c9cf6",
    storageBucket: "weatherapp-c9cf6.appspot.com",
    messagingSenderId: "752986472948",
    appId: "1:752986472948:web:64eb8512cca67e9d1cf9a1"
  };
  
  // Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();