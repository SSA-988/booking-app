
import { getApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwBeoZMo89ie6_o0Acl2ApP1PQNJa0DPc",
  authDomain: "booking-app-fd322.firebaseapp.com",
  projectId: "booking-app-fd322",
  storageBucket: "booking-app-fd322.appspot.com",
  messagingSenderId: "256540609352",
  appId: "1:256540609352:web:e6ea70879ac9cb7131817d"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};