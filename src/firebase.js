import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBvM274OClMUHak31suMGOjO4AUykZOlkw",
  authDomain: "big-shop-30b60.firebaseapp.com",
  databaseURL: "https://big-shop-30b60.firebaseio.com",
  projectId: "big-shop-30b60",
  storageBucket: "big-shop-30b60.appspot.com",
  messagingSenderId: "482466162265",
  appId: "1:482466162265:web:aa85cade6cfd92db713348",
});

const auth = firebase.auth();

export { auth };
