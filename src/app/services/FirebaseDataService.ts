import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDRWapRJABealQU1IDG-YfUT_20vm_1Qbk',
  authDomain: 'ite-multiplication-vue.firebaseapp.com',
  databaseURL:
    'https://ite-multiplication-vue-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'ite-multiplication-vue',
  storageBucket: 'ite-multiplication-vue.appspot.com',
  messagingSenderId: '461170272082',
  appId: '1:461170272082:web:765e57fa5d63929e8b3c8b',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export { firebase, database };
