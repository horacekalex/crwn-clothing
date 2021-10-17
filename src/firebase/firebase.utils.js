import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCwy5TpWc3DufTzSNf_zY1G7J117JxZRVk",
    authDomain: "crwn-clothing-27ddf.firebaseapp.com",
    projectId: "crwn-clothing-27ddf",
    storageBucket: "crwn-clothing-27ddf.appspot.com",
    messagingSenderId: "635150025604",
    appId: "1:635150025604:web:3f9c980ca3c63bb5b193d1",
    measurementId: "G-12BSDZFDZ4"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

