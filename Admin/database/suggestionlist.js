import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
import { getDatabase, ref, push ,set, onValue, remove } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAVvKAD_0EtH4cGKAu1WodaEY5g6TgFXBo",
  authDomain: "creditbank-d05fd.firebaseapp.com",
  databaseURL: "https://creditbank-d05fd-default-rtdb.firebaseio.com",
  projectId: "creditbank-d05fd",
  storageBucket: "creditbank-d05fd.appspot.com",
  messagingSenderId: "962739966741",
  appId: "1:962739966741:web:9ffbdfff756eff16060f1c",
  measurementId: "G-VZHXWF4G1F"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getDatabase(app);

const suggestionRef = ref(db, 'suggestions');

onValue(suggestionRef, (snapshot) => {
  snapshot.forEach((childSnapshot) => {

    var output = document.getElementById('output');
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
    

    console.log(childKey);
    console.log(childData);

   
  output.innerHTML+= `
  
  <tr>
    <td>${childData.FirstName}</td>
    <td>${childData.LastName}</td>
    <td>${childData.Email}</td>
    <td>${childData.Department}</td>
    <td>${childData.Message}</td>
  
  
    <td><button id="delete" class="btn btn-danger">Delete</button></td>

    </tr>
  
 
  
  `;
  
var d = document.getElementById('delete');
d.addEventListener('click', Delete);


 function Delete () {

 var dataRef = ref (db, 'feedbacks');

 dataRef.child('feedbacks/', + childKey).remove();

    
 }

  });

});











