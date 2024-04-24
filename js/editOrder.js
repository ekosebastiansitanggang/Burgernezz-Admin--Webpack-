// Import all functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, collection, getDoc, getDocs, doc, updateDoc} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

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

const url = new URL(window.location.href);
const _id = url.searchParams.get('id');
console.log(_id);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Times
const currentDateTimes = new Date();
const field = "dateTime";

// Firestore Codes
const db = getFirestore(app);

// Data Order
const selDataOrder = doc(db, "Order", _id);
const selDocSnapOrder = await getDoc(selDataOrder);
function readTableOrder() {
    let tableOrder = document.getElementById('tbody2');
    let row1 = document.createElement('tr');
    const orderIDTB = document.createElement('td');
    const emailTB = document.createElement('td');
    const addressTB = document.createElement('td');
    const phoneTB = document.createElement('td');
    const priceTB = document.createElement('td');
    const paymentTypeTB = document.createElement('td');
    const paymentIDTB = document.createElement('td');
    const statusTB = document.createElement('td');
    const dateTimeTB = document.createElement('td');
    orderIDTB.innerHTML = selDocSnapOrder.data().invoiceID;
    emailTB.innerHTML = selDocSnapOrder.data().address;  
    addressTB.innerHTML = selDocSnapOrder.data().address;  
    phoneTB.innerHTML = selDocSnapOrder.data().phone;
    priceTB.innerHTML = selDocSnapOrder.data().paidPrice;
    paymentTypeTB.innerHTML = selDocSnapOrder.data().paymentType;
    paymentIDTB.innerHTML = selDocSnapOrder.data().paymentID;
    statusTB.innerHTML = selDocSnapOrder.data().status;
    dateTimeTB.innerHTML = selDocSnapOrder.data().dateTime;                     
    row1.appendChild(orderIDTB);
    row1.appendChild(emailTB);
    row1.appendChild(addressTB);
    row1.appendChild(phoneTB);
    row1.appendChild(priceTB);
    row1.appendChild(paymentTypeTB);
    row1.appendChild(paymentIDTB);
    row1.appendChild(statusTB);
    row1.appendChild(dateTimeTB);
    tableOrder.appendChild(row1);
}
readTableOrder();


//Data Makanan yang DiOrder
const foodOrderData = collection(db, "Order", _id, "Cart");
const foodOrderDocSnap = await getDocs(foodOrderData);
function readTableFood(){
    let tableFood = document.getElementById('tbody3');
    foodOrderDocSnap.forEach((doc) => {
        let row2 = document.createElement('tr');
        const foodOrderIDTB = document.createElement('td');
        const foodPurchasedTB = document.createElement('td');
        const foodQuantityTB = document.createElement('td');
        const foodPriceTB = document.createElement('td');
        foodOrderIDTB.innerHTML = doc.id;
        foodPurchasedTB.innerHTML = doc.data().product;
        foodQuantityTB.innerHTML = doc.data().quantity;
        foodPriceTB.innerHTML = doc.data().price;
        row2.appendChild(foodOrderIDTB);
        row2.appendChild(foodPurchasedTB);
        row2.appendChild(foodQuantityTB);
        row2.appendChild(foodPriceTB);
        tableFood.appendChild(row2);
    })
}
readTableFood();


// Ambil Form
const formOrder = document.getElementById('foodForm');

function backto_food() {
	window.location.href = "food.html";
}

formOrder.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah pengiriman form secara default
  
    const newStatus = document.getElementById("statusForm").value;
  
    // Mendapatkan referensi ke dokumen yang akan diperbarui
    const orderData = doc(db, 'Order', _id);
  
    // Mengupdate dokumen dengan nilai baru
    updateDoc(orderData, {
        status: newStatus
    })
    .then(() => {
        console.log('Data Pesanan Berhasil Diubah');
        window.alert('Data Pesanan Berhasil Diubah');
        window.location.href = "order.html";
    })
    .catch((error) => {
      console.error('Data Pesanan Gagal Diubah, Error:', error);
      window.alert('Data Pesanan Gagal Diubah, Error:', error);
    });
});