import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC_5s-aYX1qbNIE2rptl7lcCPe4HucJa3c",
    authDomain: "imessage-chandana.firebaseapp.com",
    projectId: "imessage-chandana",
    storageBucket: "imessage-chandana.appspot.com",
    messagingSenderId: "1024696689102",
    appId: "1:1024696689102:web:effab381f6ccee6f23cb9f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;