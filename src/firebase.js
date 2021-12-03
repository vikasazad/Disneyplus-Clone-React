import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCPHjqVew8JIg7-B2yCml8p99Yvg7bdvy8",
    authDomain: "disney-f7976.firebaseapp.com",
    databaseURL: "https://disney-f7976-default-rtdb.firebaseio.com",
    projectId: "disney-f7976",
    storageBucket: "disney-f7976.appspot.com",
    messagingSenderId: "35916404798",
    appId: "1:35916404798:web:c875563488d16b3caa996f",
    measurementId: "G-Y42DE5P7HC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
