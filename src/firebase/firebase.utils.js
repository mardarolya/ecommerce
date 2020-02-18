import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCIhk4nEjMf9CJRaWGwrak93aIJ99PeDZ4',
  authDomain: 'udemy-ecommerce-855b6.firebaseapp.com',
  databaseURL: 'https://udemy-ecommerce-855b6.firebaseio.com',
  projectId: 'udemy-ecommerce-855b6',
  storageBucket: 'udemy-ecommerce-855b6.appspot.com',
  messagingSenderId: '324644853064',
  appId: '1:324644853064:web:a82511512b1712b95b4f7d',
  measurementId: 'G-MBCP8L8R3G'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
