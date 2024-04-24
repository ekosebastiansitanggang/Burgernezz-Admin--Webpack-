// Import all functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, collection, query, where, getCountFromServer, getDocs } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

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

// Initialized Firestore Codes
const db = getFirestore(app);
const coll = collection(db, "Order");
const activeQuery1 = query(coll, where("status", "!=", "Sudah Diantar, sudah bayar"));
const totalSalesQuery2 = query(coll);
const salesDocSnap = await getDocs(totalSalesQuery2);

//Function Total
function readTotalPrice(){
    let orderCount = 0
    let paidPriceAllAA = 0;
    salesDocSnap.forEach((doca) => {
        let dateTimeFA = doca.data().dateTime;
        let paidPriceFA = doca.data().paidPrice;
        if (dateTimeFA.indexOf(thisMonthtxt) !== -1) {
            paidPriceAllAA = paidPriceAllAA + paidPriceFA;
            orderCount++;
        }
    })
    document.getElementById("totalsaleskmonths").innerHTML = orderCount;
    document.getElementById("totalpricesaleskmonths").innerHTML = "Rp "+ paidPriceAllAA;
}

// Total Count Codes
const snapshot1 = await getCountFromServer(coll);
const snapshot2 = await getCountFromServer(activeQuery1);
document.getElementById("totalorder").innerHTML = snapshot1.data().count;
document.getElementById("activeorder").innerHTML = snapshot2.data().count;
readTotalPrice();
