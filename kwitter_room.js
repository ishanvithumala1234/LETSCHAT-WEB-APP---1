 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCIs1bv4Va7K3ZYDCVbiJBqVCeiWsnQ7uo",
      authDomain: "letschat-web-app---1-afa97.firebaseapp.com",
      databaseURL: "https://letschat-web-app---1-afa97-default-rtdb.firebaseio.com",
      projectId: "letschat-web-app---1-afa97",
      storageBucket: "letschat-web-app---1-afa97.appspot.com",
      messagingSenderId: "968253090293",
      appId: "1:968253090293:web:a9b0ce8312a96a90db18bc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome!!"

function add_room() {
     room_name = document.getElementById("room_name").value;
    
      localStorage.setItem("roomname",room_name);
  
      window.location = "kwitter_room.html";
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
