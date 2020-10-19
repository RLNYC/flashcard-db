import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/database';

//connect Firebase to React Frontend 

const firebaseConfig ={

};

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
firebase.initializeApp(firebaseConfig);
const fb_db = firebase.database();
const fb_storage = firebase.storage();

export {fb_db, fb_storage};