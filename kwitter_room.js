

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCpSp7mCzdUVj8TRYvR5d05ZprkX9nyoMA",
  authDomain: "kwitter-c715b.firebaseapp.com",
  databaseURL: "https://kwitter-c715b-default-rtdb.firebaseio.com",
  projectId: "kwitter-c715b",
  storageBucket: "kwitter-c715b.appspot.com",
  messagingSenderId: "339654987152",
  appId: "1:339654987152:web:24fb0f54b475b952e2f715"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}