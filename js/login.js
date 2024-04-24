// Import all functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

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
    window.location.replace("home.html");
  } else {
    console.log('No user');
  }
});

//Password Forgot
const forgotPassEvent = document.querySelector('forgotPassBtn');

// Sign in with Email and Password
const loginBtnEvent = document.querySelector('#loginBtn');
loginBtnEvent.addEventListener('click', e => {
  const emailAdminFill = document.querySelector('#adminEmail').value;
  const passAdminFill = document.querySelector('#adminPassword').value;
  signInWithEmailAndPassword(auth, emailAdminFill, passAdminFill).then((userCredential) => {
    const user = userCredential.user;
    window.location.replace("home.html");
  }).catch(error => {
    window.alert("Email atau password salah! Masukan kembali");
  })
})

