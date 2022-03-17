import {initializeApp} from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

//init firebase
const firebaseConfig = {
    apiKey: "AIzaSyDhN1NWtNttDr367J76jHycrqysr58Ixso",
    authDomain: "readinglistapp-2bdd6.firebaseapp.com",
    projectId: "readinglistapp-2bdd6",
    storageBucket: "readinglistapp-2bdd6.appspot.com",
    messagingSenderId: "373720711410",
    appId: "1:373720711410:web:d2899b14502313d9f5d06b"
};


//init firebase

const app = initializeApp(firebaseConfig);


//init firestore
const db = getFirestore(app);

// init firebase auth
const auth =getAuth()


export {db, auth}