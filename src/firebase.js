import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyA5SwHhowQ3DnRAGwDHih5xX1Oj89OhyKw",
  authDomain: "slack-internal-tool.firebaseapp.com",
  projectId: "slack-internal-tool",
  storageBucket: "slack-internal-tool.appspot.com",
  messagingSenderId: "134142844004",
  appId: "1:134142844004:web:22765604e65e841ed55371"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db}