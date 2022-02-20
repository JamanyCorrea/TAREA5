//Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,

 } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV-dnIf3Sm3poALLXWxRM4QfDg5JDLlnk",
  authDomain: "crudjavascript-120d8.firebaseapp.com",
  projectId: "crudjavascript-120d8",
  storageBucket: "crudjavascript-120d8.appspot.com",
  messagingSenderId: "1078556689341",
  appId: "1:1078556689341:web:f26aaacb335191232f08d4",
  measurementId: "G-93DP0BX9R0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask= (title, description) =>
  addDoc(collection(db,'tasks'),{title,description});

export const getTasks = () => getDocs(collection(db,'tasks'));

export const onGetTasks = (callback) => onSnapshot(collection(db,'tasks'),callback) 

export const deleteTask = (id) => deleteDoc(doc(db,'tasks',id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);



 