var firebaseConfig = {
    apiKey: "AIzaSyAPSntXOWgXcjhIbi2D19YWiqQoj2kws-I",
    authDomain: "class-test-da4bb.firebaseapp.com",
    databaseURL: "https://class-test-da4bb-default-rtdb.firebaseio.com",
    projectId: "class-test-da4bb",
    storageBucket: "class-test-da4bb.appspot.com",
    messagingSenderId: "679376957836",
    appId: "1:679376957836:web:13423293ba9040785f66a9",
    measurementId: "G-Z8PFFQXXHB"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
Room_names = [];
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    //Start code
    console.log(Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
   });});}
getData();
function addRoom(){
  name_room = document.getElementById("room_name").value;

  firebase.database().ref("/").child(name_room).update({
    purpose : "adding room name"
  });

  localStorage.setItem("Room Name", name_room);
  window.location = "kwitter_page.html";
}
function update(){
  val = localStorage.getItem("username");
  document.getElementById("user_name").innerHTML = "Welcome "+val;
}
function redirectToRoomName(room_name){
  console.log(room_name);
  localStorage.setItem("Room Name", room_name);
  window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("Room Name");
  window.location = "index.html";
}