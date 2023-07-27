// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCbrVFBltPqVcVy0-Bnbs-UWZW9_UI5pDE",

  authDomain: "mock-test-9c5ec.firebaseapp.com",

  databaseURL: "https://mock-test-9c5ec-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "mock-test-9c5ec",

  storageBucket: "mock-test-9c5ec.appspot.com",

  messagingSenderId: "624395724787",

  appId: "1:624395724787:web:5a7f19294eeaffccee9486"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export {
    database
  };
  
  export default initializeApp(firebaseConfig);