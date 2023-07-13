import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyASrPV9ejSDWpMC6knLtRsykqQHzwIB_w4",
    authDomain: "fir-7ebad.firebaseapp.com",
    projectId: "fir-7ebad",
    storageBucket: "fir-7ebad.appspot.com",
    messagingSenderId: "1058847419370",
    appId: "1:1058847419370:web:b2ebec8aef2536b72f6093",
    measurementId: "G-JBZZBYQFWE"
  };


  const app = initializeApp(firebaseConfig);
  export const firestore = getFirestore(app)