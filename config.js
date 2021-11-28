import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCE7c53XaYtbjnY-CFOdsbSaUZaOMM6mgM",
    authDomain: "class-test-b44a4.firebaseapp.com",
    databaseURL: "https://class-test-b44a4-default-rtdb.firebaseio.com",
    projectId: "class-test-b44a4",
    storageBucket: "class-test-b44a4.appspot.com",
    messagingSenderId: "771063476474",
    appId: "1:771063476474:web:c4799e68a80d2bc739d943"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();