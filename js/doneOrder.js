// Import all functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getFirestore, collection, getDocs, getDoc, query, orderBy, limit, limitToLast, startAfter, endBefore, where } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

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

// Times
const currentDateTimes = new Date();
const field = "dateTime";
const pageLimit = 20;

// Firestore Codes
const db = getFirestore(app);
const data = collection(db, "Order");
const q = query(data, orderBy("dateTime"), where("status", "==", "Sudah Diantar, sudah bayar")); // , limit(pageLimit)
const docSnap = await getDocs(q);

// Menampilkan Tabel
function readTables() {
    let table = document.getElementById('tbody1done');
    docSnap.forEach((doc) => {
        let row = document.createElement('tr');
        const orderIDTB = document.createElement('td');
        const emailTB = document.createElement('td');
        const addressTB = document.createElement('td');
        const phoneTB = document.createElement('td');
        const priceTB = document.createElement('td');
        const paymentTypeTB = document.createElement('td');
        const paymentIDTB = document.createElement('td');
        const statusTB = document.createElement('td');
        const dateTimeTB = document.createElement('td');
        const orderDetailTB = document.createElement('td');
        const orderDetailBtn = document.createElement('button');
        orderIDTB.innerHTML = doc.data().invoiceID;
        emailTB.innerHTML = doc.data().email;  
        addressTB.innerHTML = doc.data().address;  
        phoneTB.innerHTML = doc.data().phone;
        priceTB.innerHTML = doc.data().paidPrice;
        paymentTypeTB.innerHTML = doc.data().paymentType;
        paymentIDTB.innerHTML = doc.data().paymentID;
        statusTB.innerHTML = doc.data().status;
        dateTimeTB.innerHTML = doc.data().dateTime;      
        orderDetailBtn.appendChild(document.createTextNode("List Pesanan"));  
        orderDetailTB.appendChild(orderDetailBtn);                     
        row.appendChild(orderIDTB);
        row.appendChild(emailTB);
        row.appendChild(addressTB);
        row.appendChild(phoneTB);
        row.appendChild(priceTB);
        row.appendChild(paymentTypeTB);
        row.appendChild(paymentIDTB);
        row.appendChild(statusTB);
        row.appendChild(dateTimeTB);
        row.appendChild(orderDetailTB);
        table.appendChild(row);
        const dataID = doc.id;
        orderDetailBtn.addEventListener('click', function() {
            window.location.href = "editOrder.html?id="+dataID;
        });
    })
    .catch(err=>{
        console.log(`Error: ${err}`);
  });
}
readTables();

//Firestore Change Tables


//Firestore Click Link
