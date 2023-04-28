import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBRLfFhmmUGFysmmEZaMNcZInrizanoHSA",
  authDomain: "online-auction-46e0c.firebaseapp.com",
  databaseURL: "https://online-auction-46e0c-default-rtdb.firebaseio.com",
  projectId: "online-auction-46e0c",
  storageBucket: "online-auction-46e0c.appspot.com",
  messagingSenderId: "541347242745",
  appId: "1:541347242745:web:40e232c3c164cc790f3828"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();


export {
    storage,firebase as default
}
 