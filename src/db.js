import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeekS8nunCCjQYNs_w4HPVTmGpYfEAa70",
  authDomain: "dhaya-test-b826b.firebaseapp.com",
  databaseURL: "https://dhaya-test-b826b.firebaseio.com",
  projectId: "dhaya-test-b826b",
  storageBucket: "dhaya-test-b826b.appspot.com",
  messagingSenderId: "345216955328",
  appId: "1:345216955328:web:d3dd7175982cfc1ad08e25"
};

export const db = firebase.initializeApp(firebaseConfig).firestore();

export const AuthProvider = firebase.auth();

export const PatientsRef = db.collection("patients");
export const AppointmentsRef = db.collection("appointments");
export const DoctorsRef = db.collection("users").where("role", "==", "doctor");
export const SlotsRef = db.collection("slots");
export const HospitalsRef = db.collection("hospitals");
