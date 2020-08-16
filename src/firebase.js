import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAL2KCy3h5F4yJjCM31tKqgulgRbRKPzeI",
    authDomain: "tiktok-c.firebaseapp.com",
    databaseURL: "https://tiktok-c.firebaseio.com",
    projectId: "tiktok-c",
    storageBucket: "tiktok-c.appspot.com",
    messagingSenderId: "691203973958",
    appId: "1:691203973958:web:65f9eb112f056affec3b47",
    measurementId: "G-DNBRJ40VBG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;