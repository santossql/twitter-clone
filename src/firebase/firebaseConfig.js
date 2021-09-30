// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};*/

const firebaseConfig = {
    apiKey: "AIzaSyDhdMeQifl8_giVV8ZrSIDS60beeYedakQ",
    authDomain: "twitter-clone-d6196.firebaseapp.com",
    projectId: "twitter-clone-d6196", 
    storageBucket: "twitter-clone-d6196.appspot.com",
    messagingSenderId: "99285725993",
    appId: "1:99285725993:web:6e81cbfc84d5601b89bd38",
    measurementId: "G-CJTX2195WS"
  };
  
// Initialize Firebase
//const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
