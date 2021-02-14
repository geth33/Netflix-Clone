import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCgPAX4bcZ6ppZq6mmFkByaZU2ohrQ7z_g",
    authDomain: "netflix-clone-ba12f.firebaseapp.com",
    projectId: "netflix-clone-ba12f",
    storageBucket: "netflix-clone-ba12f.appspot.com",
    messagingSenderId: "136061336655",
    appId: "1:136061336655:web:8d06edde0b25b283d63e3a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth } // You can have many explicit exports but only one default export
  export default db; // This db could just as easily be export in prev line of code