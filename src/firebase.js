import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBUwRaiyXeG189rv9BcU9blsO9ru6_xMhc",
    authDomain: "lorem-ipsum-13fb6.firebaseapp.com",
    databaseURL: "https://lorem-ipsum-13fb6.firebaseio.com",
    projectId: "lorem-ipsum-13fb6",
    storageBucket: "lorem-ipsum-13fb6.appspot.com",
    messagingSenderId: "623145131444",
    appId: "1:623145131444:web:800f2127eb4e4308fee6e1",
    measurementId: "G-27R1HMMNDR"
  };
  const database = firebase.initializeApp(firebaseConfig);
export default database;