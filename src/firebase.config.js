// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA8hUZ2zNnsKi8JFiifXKR6lMTqHlhx4y8",
//   authDomain: "ooooo-5419a.firebaseapp.com",
//   projectId: "ooooo-5419a",
//   storageBucket: "ooooo-5419a.appspot.com",
//   messagingSenderId: "703873231799",
//   appId: "1:703873231799:web:81a899e16f8a1874ff5632"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDeGYvqap5QglWuqn4mOeB3YqR8xuGRUZs",
  authDomain: "testing-otp-ecb1f.firebaseapp.com",
  projectId: "testing-otp-ecb1f",
  storageBucket: "testing-otp-ecb1f.appspot.com",
  messagingSenderId: "228004346713",
  appId: "1:228004346713:web:774bcb23b3b014a986aa48"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
