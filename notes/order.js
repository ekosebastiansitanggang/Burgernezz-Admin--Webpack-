// Import all functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getFirestore, collection, getDocs, getDoc, query, orderBy, limit, limitToLast, startAfter, endBefore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

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

// Authorization Codes
const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('logged in!');
  } else {
    console.log('No user');
  }
});

// Times
const currentDateTimes = new Date();
const field = "dateTime";
const pageLimit = 20;

// Firestore Codes
const db = getFirestore(app);
const data = collection(db, "Order");
const q = query(data, orderBy(field), limit(pageLimit));
const docSnap = await getDocs(q);
docSnap.forEach((doc) => {
  let data = doc.data();
            let row  = `<tr>
                            <td>${data.invoiceID}</td>
                            <td>${data.email}</td>
                            <td>${data.address}</td>
                            <td>${data.phone}</td>
                            <td>Rp ${data.paidPrice}</td>
                            <td>${data.paymentType}</td>
                            <td>${data.paymentID}</td>
                            <td>${data.status}</td>
                            <td>${data.dateTime}</td>
                            <td><input type="button" value="List Pesanan" id="detailsButton"/></td>
                      </tr>`;
            let table = document.getElementById('tbody1')
            const orderID = data.id;
            table.innerHTML += row
        })
    .catch(err=>{
        console.log(`Error: ${err}`)
    });

// Next Page List
// function nextPage(last) {
//   return orderBy(field), startAfter(last[field]), limit(pageLimit);
// }
// const nextClick = document.getElementById(nextButton);
// nextClick.addEventListener("touchend", nextPage);

// Previous Page List
// function prevPage(first) {
//   return orderBy(field), endBefore(first[field]), limitToLast(pageLimit);
// }
// const prevClick = document.getElementById(prevButton);
// prevClick.addEventListener("touchstart", prevClick);

//Firestore Click Link
