import firebase from "firebase";

const firebaseConfig = {
  apiKey:
    "AIzaSyCcdCrBU8bGTEfhrS681HPzqTny1PPS0KI" /** TODO: À mettre en variable **/,
  authDomain: "hommeevasion.firebaseapp.com",
  projectId: "hommeevasion",
  storageBucket: "hommeevasion.appspot.com",
  messagingSenderId: "726309203530",
  appId: "1:726309203530:web:b80f6aa6ff835e7288c0b3",
};

/** Autre serveur **/
// var firebaseConfig = {
  //   apiKey: 'AIzaSyBTQOlMrKa6OZfAfDkOWsL-QrymqUAcSYo',
  //   authDomain: 'little-tags-6a731.firebaseapp.com',
  //   projectId: 'little-tags-6a731',
  //   storageBucket: 'little-tags-6a731.appspot.com',
  //   messagingSenderId: '780658481144',
  //   appId: '1:780658481144:web:2fd3d2bc7a648bda6da80d',
  //   measurementId: 'G-P21STQR3LC',
  // }

const myApp = firebase.initializeApp(firebaseConfig);

export const auth = myApp.auth();

export const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({
  display: "popup",
});
