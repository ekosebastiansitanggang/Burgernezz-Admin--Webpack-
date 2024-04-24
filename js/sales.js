// Import all functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, collection, getDocs, query, where} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

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

// Get Current Date
var thisMonth = new Date();
var mm = String(thisMonth.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = thisMonth.getFullYear();
let thisMonthtxt = mm + '/' + yyyy;
const monthsDate = document.getElementById('thisMonth');
monthsDate.innerText = thisMonth;

// Firestore Codes
const db = getFirestore(app);
const salesData = collection(db, "Order");
const qS = query(salesData);
const thisMonthDocSnap = await getDocs(qS);
const allTimeDocSnap = await getDocs(salesData);

//Table Function
function readDataThisMonths(){
  let row1 = document.getElementById('tr1');
  let table9 = document.getElementById('tbody6');
  const tMoOrderCountTB = document.createElement('td');
  const tMoSalesPriceTB = document.createElement('td');
  let orderCount = 0
  let paidPriceAll1 = 0;
  thisMonthDocSnap.forEach((doc1) => {
  	let dateTimeF1 = doc1.data().dateTime;
    let paidPriceF1 = doc1.data().paidPrice;
	if (dateTimeF1.indexOf(thisMonthtxt) !== -1) {
	  paidPriceAll1 = paidPriceAll1 + paidPriceF1;
    let row9 = document.createElement('tr');
    const orderIDTB = document.createElement('td');
    const emailTB = document.createElement('td');
    const addressTB = document.createElement('td');
    const phoneTB = document.createElement('td');
    const priceTB = document.createElement('td');
    const paymentTypeTB = document.createElement('td');
    const paymentIDTB = document.createElement('td');
    const statusTB = document.createElement('td');
    const dateTimeTB = document.createElement('td');
    orderIDTB.innerHTML = doc1.data().invoiceID;
    emailTB.innerHTML = doc1.data().email;  
    addressTB.innerHTML = doc1.data().address;  
    phoneTB.innerHTML = doc1.data().phone;
    priceTB.innerHTML = doc1.data().paidPrice;
    paymentTypeTB.innerHTML = doc1.data().paymentType;
    paymentIDTB.innerHTML = doc1.data().paymentID;
    statusTB.innerHTML = doc1.data().status;
    dateTimeTB.innerHTML = doc1.data().dateTime;
    row9.appendChild(orderIDTB);
    row9.appendChild(emailTB);
    row9.appendChild(addressTB);
    row9.appendChild(phoneTB);
    row9.appendChild(priceTB);
    row9.appendChild(paymentTypeTB);
    row9.appendChild(paymentIDTB);
    row9.appendChild(statusTB);
    row9.appendChild(dateTimeTB);
    table9.appendChild(row9);
		orderCount++;
	}
  })
  tMoOrderCountTB.innerHTML = orderCount;
  tMoSalesPriceTB.innerHTML = "Rp "+ paidPriceAll1;
  row1.appendChild(tMoOrderCountTB);
  row1.appendChild(tMoSalesPriceTB);
}
readDataThisMonths();
function readDataAllTime(){
  let row2 = document.getElementById('tr2');
  const allOrderCountTB = document.createElement('td');
  const totalSalesPriceTB = document.createElement('td');
  const snapshotAll = allTimeDocSnap.size;
  let paidPriceAll2 = 0;
  allTimeDocSnap.forEach((doc2) => {
    let paidPriceF2 = doc2.data().paidPrice;
    paidPriceAll2 = paidPriceAll2 + paidPriceF2;
  })
  allOrderCountTB.innerHTML = snapshotAll;
  totalSalesPriceTB.innerHTML = "Rp "+ paidPriceAll2;
  row2.appendChild(allOrderCountTB);
  row2.appendChild(totalSalesPriceTB);
}
readDataAllTime();