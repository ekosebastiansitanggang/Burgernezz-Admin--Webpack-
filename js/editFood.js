// Import all functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, getDoc, doc, updateDoc} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

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
const db = getFirestore(app);
const foodData = doc(db, 'Food', _id);
const docSnap = await getDoc(foodData);

// Mendapatkan Form
let foodType = document.getElementById("foodTypeForm");
let foodName = document.getElementById("foodNameForm");
let foodPrice = document.getElementById("foodPriceForm");

if (docSnap.exists()) {
  console.log(docSnap.data());
  
  let _type = docSnap.data().type;
  let _product = docSnap.data().product;
  let _price = docSnap.data().price;
  
  foodType.value = _type;
  foodName.value = _product;
  foodPrice.value = _price;

}

const formFood = document.getElementById('foodForm');

function backto_food() {
	window.location.href = "food.html";
}

formFood.addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah pengiriman form secara default

	const foodType = document.getElementById("foodTypeForm").value;
	const foodName = document.getElementById("foodNameForm").value;
	const foodPrice = document.getElementById("foodPriceForm").value;

  // Mendapatkan referensi ke dokumen yang akan diperbarui
  const foodData = doc(db, 'Food', _id);

  // Mengupdate dokumen dengan nilai baru
  updateDoc(foodData, {
    type: foodType,
    product: foodName,
	  price: foodPrice
  })
  .then(() => {
    console.log('Data Makanan Berhasil Diubah');
	  window.alert('Data Makanan Berhasil Diubah');
    window.location.href = "food.html";
  })
  .catch((error) => {
    console.error('Data Makanan Gagal Diubah, Error:', error);
	window.alert('Data Makanan Gagal Diubah, Error:', error);
  });
});