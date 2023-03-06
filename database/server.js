

// Initialize Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
import { getDatabase, ref, push ,set , serverTimestamp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

import { getAuth} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
import { getFirestore, collection, addDoc, updateDoc,doc,increment ,FieldValue} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAVvKAD_0EtH4cGKAu1WodaEY5g6TgFXBo",
//   authDomain: "creditbank-d05fd.firebaseapp.com",
//   databaseURL: "https://creditbank-d05fd-default-rtdb.firebaseio.com",
//   projectId: "creditbank-d05fd",
//   storageBucket: "creditbank-d05fd.appspot.com",
//   messagingSenderId: "962739966741",
//   appId: "1:962739966741:web:9ffbdfff756eff16060f1c",
//   measurementId: "G-VZHXWF4G1F"
// };


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

const dbFirestore = getFirestore(app);




const db = getDatabase(app);

const postListFeedbacks = ref(db, 'Customerfeedbacks');

const newPostFeedbacks = push(postListFeedbacks);




const notificationPosts = ref(db, 'notifications');

const newNotfications = push(notificationPosts);


//storage refernce








send.addEventListener('click',(e)=>{



  e.preventDefault();

var email = document.getElementById('email').value;
var phone = document.getElementById('phone').value;
var message = document.getElementById('message').value;
var feedbacktype = document.getElementById('feedbacktype').value;
var send = document.getElementById('send');
var branch = document.getElementById('branch').value;
var acc = document.getElementById('acc').value;
var channel = document.getElementById('channels').value;
var copy = document.getElementById('copy').value;
var name = document.getElementById('name').value;


var date = new Date().toString();





 set(newPostFeedbacks, {
     Name : name,
     Email:  email,
     Phone: phone,
     FeedBack : feedbacktype,
     Branch: branch,
     Channel: channel,
     Account : acc,
     Message : message,
   
     Date : date,
     Stamp: serverTimestamp()
})

set(newNotfications,{

  Message: message,
  Email :email

})

//cloud firestore
updateDoc(doc( dbFirestore, "Countfeedbacks", "Customer"), {
  Counts :increment(1)
 

  
},{ capital: true }, { merge: true })

.then(() => {

console.log(email);
console.log(phone);
console.log(message);
console.log(feedbacktype);

console.log(branch);
console.log(acc);
console.log(newNotfications);


Swal.fire({
  title: "Thank You!",
  text: "Your Feed Back Is Successfully Sent",
  icon: "success",
});


})
.catch((error)=>{

  Swal.fire({
  title: "Sorry!",
  text: "Your Feed Back Is Unsuccessfully Captured",
  icon: "info",
  button: "Okay",
});

})

});









