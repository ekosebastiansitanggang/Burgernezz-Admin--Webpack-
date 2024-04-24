// Import all functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

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

// Firestore Codes
const db = getFirestore(app);
const foodData = collection(db, "Food");
const docSnap = await getDocs(foodData);
let table = document.getElementById('tbody4');
function readTables(){
    docSnap.forEach((doc) => {
        let row = document.createElement('tr');
        const productTB = document.createElement('td');
        const productTypeTB = document.createElement('td');
        const priceTB = document.createElement('td');
        const editTB = document.createElement('td');
        const editBtn = document.createElement('button');
        productTB.innerHTML = doc.data().product;
        productTypeTB.innerHTML = doc.data().type;  
        priceTB.innerHTML = doc.data().price;  
        editBtn.appendChild(document.createTextNode("Ubah"));   
        editTB.appendChild(editBtn);                     
        row.appendChild(productTB);
        row.appendChild(productTypeTB);
        row.appendChild(priceTB);
        row.appendChild(editTB);
        table.appendChild(row);
        const foodDataID = doc.id;
        editBtn.addEventListener('click', function() {
            window.location.href = "editFood.html?id="+foodDataID;
        });
    })

}
readTables();



//Firestore Change Tables


//Firestore Click Link
