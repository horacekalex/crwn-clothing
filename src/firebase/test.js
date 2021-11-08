import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

// one way to query for a specific document
firestore.collection('users').doc('553wMtr3SCRgitPapeGu').collection('cartItems').doc('acXCGpvOj4z0XsZLVIbm');
// other way to query for a specific document 
firestore.doc('/user/553wMtr3SCRgitPapeGu/cartItems/acXCGpvOj4z0XsZLVIbm);
// access collection of user 
firestore.collection('/user/553wMtr3SCRgitPapeGu/cartItems');