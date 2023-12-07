// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByGxDUuCrWdPXcLI4s37OKM0G-vy1Z4CQ",
  authDomain: "agenda-react-native-6f2a8.firebaseapp.com",
  projectId: "agenda-react-native-6f2a8",
  storageBucket: "agenda-react-native-6f2a8.appspot.com",
  messagingSenderId: "76779397734",
  appId: "1:76779397734:web:d0bb7448b038ffdf4503a7",
  databaseURL: "https://agenda-react-native-6f2a8-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export {firebase};