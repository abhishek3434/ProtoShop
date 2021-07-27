import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyACy09iuFa07ujSJ0jEpoUIpakSd-i-xNA",
    authDomain: "proto-db-7f27a.firebaseapp.com",
    projectId: "proto-db-7f27a",
    storageBucket: "proto-db-7f27a.appspot.com",
    messagingSenderId: "373439710037",
    appId: "1:373439710037:web:a65486919f47ed4d1f65dc",
    measurementId: "G-BR15R23W93"
}

firebase.initializeApp(config)

export const auth=firebase.auth();
export const firestore= firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({promt:"select_account"});

export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;