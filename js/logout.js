// Import all functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXkzqp60ykRtmJ2lUdRiQ0ds_nojakwUQ",
    authDomain: "burgernezz-test.firebaseapp.com",
    databaseURL: "https://burgernezz-test-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "burgernezz-test",
    storageBucket: "burgernezz-test.appspot.com",
    messagingSenderId: "1071878711267",
    appId: "1:1071878711267:web:bfc65067a469e8e161a2d6"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

// Check if there's user sign in
onAuthStateChanged(auth, (user) => {
  if (user) {
    
  } else {
    window.location.replace("login.html");
  }
});

// Logout
const loginBtnEvent = document.querySelector('#logoutBtn');
loginBtnEvent.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut();
    alert("Anda Keluar");
    window.location.replace("login.html");
})