import firebase from 'firebase/app';
import 'firebase/firestore';

// if (firebase.apps.length === 0) {
const firebaseConfig = {
  apiKey: "AIzaSyAcch9PgKHMPHZW6JlprgocMMVDVrSV1cE",
  authDomain: "beveragepatashala.firebaseapp.com",
  projectId: "beveragepatashala",
  storageBucket: "beveragepatashala.appspot.com",
  messagingSenderId: "1098675667096",
  appId: "1:1098675667096:web:4a85ece9524093401150ed",
  measurementId: "G-M8S574YR56"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// }
const database = firebase.firestore();
// database.settings({
//     timestampsInSnapshots: true
// });


export { database };