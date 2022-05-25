import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMI4CgGhYniDAcZqIolMVYuZZTPpB0Mi0",
  authDomain: "microbyte-6d5f8.firebaseapp.com",
  projectId: "microbyte-6d5f8",
  storageBucket: "microbyte-6d5f8.appspot.com",
  messagingSenderId: "365489331284",
  appId: "1:365489331284:web:f1b5da9d32da1e4592a1c1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
