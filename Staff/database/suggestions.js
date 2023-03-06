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
const auth = getAuth(app);
var send = document.getElementById('send');
const postListFeedbacks = ref(db, 'suggestions');

const newPostFeedbacks = push(postListFeedbacks);


//post data to database
send.addEventListener('click',(e)=>{



e.preventDefault();

var fname = document.getElementById('fname').value;
var lname = document.getElementById('lname').value;
var email = document.getElementById('email').value;
var department = document.getElementById('department').value;
var message = document.getElementById('message').value;



set(newPostFeedbacks, {
FirstName : fname,
LastName : lname,
Email:  email,
Department: department,
Message : message

})



.then(() => {

swal({
title: "Thank You!",
text: "Your Suggestion Is Successfully Sent",
icon: "success",
button: "Okay",
});


})
.catch((error)=>{

swal({
title: "Sorry!",
text: "Your Suggestion Is Unsuccessfully Captured",
icon: "info",
button: "Okay",
});

})

});





//logout
var logout = document.getElementById('logout');

logout.addEventListener('click',Logout);

function Logout(){

     signOut(auth).then(() => {


      swal({
            title: "Bye Bye!",
            text: "Your Have Logged Out Successfully",
            icon: "success",
            timer: 3000,
            button: "Okay",
})

.then(() => {
  window.location.href="./login.html";
})

}).catch((error) => {
  // An error happened.
});


}


