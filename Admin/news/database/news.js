

// Initialize Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
import { getDatabase, ref, push ,set } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

import { getAuth} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";


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

const auth = getAuth(app);




const db = getDatabase(app);

const postListFeedbacks = ref(db, 'StaffNews');

const newPostFeedbacks = push(postListFeedbacks);


const notificationPosts = ref(db, 'notifications');

const newNotfications = push(notificationPosts);

var send = document.getElementById('send');





send.addEventListener('click',(e)=>{



  e.preventDefault();

var author = document.getElementById('author_name').value;
var title = document.getElementById('message_title').value;
var message = document.getElementById('message').value;
var email = document.getElementById('email').value;


var date = new Date().toString();


  set(newPostFeedbacks, {
     Name : author,
     Title: title,
     Email:  email,
     Message : message,
     Date : date
})



.then(() => {

console.log(email);
console.log(phone);
console.log(message);
console.log(feedbacktype);

console.log(branch);
console.log(acc);
console.log(newNotfications);


swal({
  title: "Thank You!",
  text: "Your News Is Successfully Sent",
  icon: "success",
  button: "Okay",
});


})
.catch((error)=>{

  swal({
  title: "Success",
  text: "Your News Is Successfully BroadCasted",
  icon: "success",
  button: "Okay",
});

})

});









