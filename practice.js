//ADD YOUR FIREBASE LINKS
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAGu7Hc1KUoJIvLnWEtKiyMhd8Ehcy2GRY",
    authDomain: "kwitter-new-af4e1.firebaseapp.com",
    databaseURL: "https://kwitter-new-af4e1-default-rtdb.firebaseio.com",
    projectId: "kwitter-new-af4e1",
    storageBucket: "kwitter-new-af4e1.appspot.com",
    messagingSenderId: "418964210993",
    appId: "1:418964210993:web:207bf7c01c9778e1e25c10",
    measurementId: "G-EWC6KKTV0F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();




  function addUser() {

user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
user_input: user_name,
age : "13", 
school : "Yafzee Public School"
});

window.alert("DataAdded successfully");
}