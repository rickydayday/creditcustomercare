import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
import { getDatabase, ref, push ,set, onValue, remove } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
import { signOut ,getAuth} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
import {getStorage, ref as sRef, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-storage.js";


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
const auth = getAuth(app);
const storage = getStorage(app);

const feedbackReferences = ref(db, 'Customerfeedbacks');
const notificationRef = ref(db, 'notifications');




onValue(feedbackReferences, (snapshot) => {
  snapshot.forEach((childSnapshot) => {

    var output = document.getElementById('output');
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
    

    console.log(childKey);
    console.log(childData);

   
  output.innerHTML+= `
  
  <tr>
    <td>${childData.Name}</td>
    <td>${childData.Phone}</td>
    <td>${childData.Email}</td>
    <td>${childData.Account}</td>
    <td>${childData.FeedBack}</td>
    <td>${childData.Branch}</td>
    <td>${childData.Channel}</td>
    <td>${childData.Message}</td>
   
    <td>${childData.Date}</td>

    <td><a href="tel:${childData.Phone}"><i class="fa fa-headset"></i></a></td>

    </tr>
  
 
  
  `;

  console.log(childData.Phone);
  



 function Delete() {


 feedbackReferences.remove();
    
 }

  });

});


onValue(notificationRef, (snapshot) => {
  snapshot.forEach((childSnapshot) => {

    var notify = document.getElementById('notify');

    const dataKey = childSnapshot.key;
    const data = childSnapshot.val();

    console.log(data);


    notify.innerHTML+= `
  
                        <span class="notification__category">${data.Email}</span>
                        <p>${data.Message}</p>
                    
    
    `;

  });
});


var logout = document.getElementById('logout');

logout.addEventListener('click',Logout);

function Logout(){

     signOut(auth).then(() => {


      swal({
            title: "Bye Bye!",
            text: "Your Have Logged Out Successfully",
            icon: "success",
            timer: 2000,
            button: "Okay",
})



.then(() => {
  window.location.href="../login.html";
})

  

}).catch((error) => {
  // An error happened.
});


}