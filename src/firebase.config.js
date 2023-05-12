// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO_nWD0gEa26d--gU32F4UzNx7hNC-vZ0",
  authDomain: "cars-doctor-29943.firebaseapp.com",
  projectId: "cars-doctor-29943",
  storageBucket: "cars-doctor-29943.appspot.com",
  messagingSenderId: "665723474266",
  appId: "1:665723474266:web:181dc3f04583aad200e363"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app