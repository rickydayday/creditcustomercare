import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEqFJs-S900pexPUDeiPc-7aRrMHhw6Ww",
  authDomain: "e-store-a05b8.firebaseapp.com",
  databaseURL: "https://e-store-a05b8.firebaseio.com",
  projectId: "e-store-a05b8",
  storageBucket: "e-store-a05b8.appspot.com",
  messagingSenderId: "929059030724",
  appId: "1:929059030724:web:307218980d0d2fd30b2b91",
  measurementId: "G-46E6M68KTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);



//sign up user

document.getElementById('login').addEventListener('click', function(e) {
e.preventDefault();

var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
 const user = userCredential.user;



  swal({
      title:"Welcome!",
      text:"User Logged In Successfully",
      icon:"success",
      timer:2000,
      button:"Ok",
    })


    .then(() => {
      window.location = 'home/';
})
 




 
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  
   swal({
      title:"Error!",
      text:"Incorrect username/password combination",
      icon:"success",
      button:"Ok",
    })

});




});