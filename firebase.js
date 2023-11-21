import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBHfDpr3BJtfJx9Exzy_nC5GDLI3a-H79w",
  authDomain: "netflix-clone-bfece.firebaseapp.com",
  projectId: "netflix-clone-bfece",
  storageBucket: "netflix-clone-bfece.appspot.com",
  messagingSenderId: "695475393974",
  appId: "1:695475393974:web:783afb4634f6336bae1d17"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth();
const db = getFirestore();

export {app,auth,db};

