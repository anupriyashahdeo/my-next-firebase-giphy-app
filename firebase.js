import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAcTGcelM_7BmbVQvrYiBuOzdJaXhyhZNs",
    authDomain: "alphabi-giphy.firebaseapp.com",
    projectId: "alphabi-giphy",
    storageBucket: "alphabi-giphy.appspot.com",
    messagingSenderId: "38284513916",
    appId: "1:38284513916:web:7ddbee2398280de7bfeff9",
    measurementId: "G-7TXHCCJ40M"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  
  export { firebaseApp, auth };