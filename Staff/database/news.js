import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
import { getDatabase, ref, push ,set, onValue, remove } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
import { signOut ,getAuth} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";


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
const auth = getAuth(app)

const feedbackReferences = ref(db, 'StaffNews');
const notificationRef = ref(db, 'notifications');

onValue(feedbackReferences, (snapshot) => {
  snapshot.forEach((childSnapshot) => {

    var output = document.getElementById('output');
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
    

    console.log(childKey);
    console.log(childData);

   
  output.innerHTML+= `

  <div class="card card-small card-post mb-4">
  <div class="card-body">
  <h5 class="card-title"><i class="fa fa-bell"></i>Title:${childData.Title}</h5>
  <p class="card-text text-muted">${childData.Message}</p>
</div>
<div class="card-footer border-top d-flex">
  <div class="card-post__author d-flex">
    <a href="#" class="card-post__author-avatar card-post__author-avatar--small" style="background-image: url('https://www.bing.com/th?id=OIP.F5vqBbf6Pr0GCLKBRiaGgwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2');">Written by James Khan</a>
    <div class="d-flex flex-column justify-content-center ml-3">
      <span class="card-post__author-name">${childData.Name}</span>
      <small class="text-muted">${childData.Date}</small>
    </div>
  </div>
  <div class="my-auto ml-auto">
    <a class="btn btn-sm btn-white" href="#">
      <i class="far fa-bookmark mr-1"></i> Bookmark </a>
  </div>
</div></div>
  

  
 
  
  `;
  



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