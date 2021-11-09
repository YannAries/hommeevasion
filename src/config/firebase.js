import firebase from 'firebase';

// const firebaseConfig = {
//   // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   // appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCcdCrBU8bGTEfhrS681HPzqTny1PPS0KI",
  authDomain: "hommeevasion.firebaseapp.com",
  projectId: "hommeevasion",
  storageBucket: "hommeevasion.appspot.com",
  messagingSenderId: "726309203530",
  appId: "1:726309203530:web:b80f6aa6ff835e7288c0b3"
};

const myApp = firebase.initializeApp(firebaseConfig)

export const auth = myApp.auth()

// export const db = myApp.firestore()
// export const storage = myApp.storage()

export const facebookProvider = new firebase.auth.FacebookAuthProvider()
facebookProvider.setCustomParameters({
  display: 'popup',
})
