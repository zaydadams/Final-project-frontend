function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//contact form script//

const x = document.getElementById("login");
const y = document.getElementById("register");
const z = document.getElementById("btn");

function register() {
  x.style.display = "none";
  y.style.display = "block";
  x.style.left = "400px";
  y.style.left = "50px";
  z.style.left = "110px";
}
function login() {
  y.style.display = "none";
  x.style.display = "block";
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
}

const modal = document.getElementById("login-form");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
let users;

fetch("https://enigmatic-sea-74675.herokuapp.com/login/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    users = data;
  });

//login function//
function logIN() {
  // users = [];
  let form = document.getElementById("login");
  let inputs = form.getElementsByTagName("input");

  let eml = inputs[0].value;
  let pssword = inputs[1].value;
  console.log(eml);
  console.log(pssword);

  let log = users.filter((user) => {
    return user.email == eml && user.password == pssword ? true : false;
  });

  console.log(log);

  if (log.length > 0) {
    let usern = document.getElementById("usermail").value;
    localStorage.setItem("thank_you", JSON.stringify(usern));
    alert("You have successfully logged in");
    window.location.href = "./static/htmlfolder/Home.html";
  } else {
    alert("Please enter a valid email and password");
  }
}

function insertUsers() {
  const form = document.getElementById("register");
  const inputs = form.getElementsByTagName("input");

  fetch("https://enigmatic-sea-74675.herokuapp.com/register/", {
    method: "POST",
    body: JSON.stringify({
      name: inputs[0].value,
      surname: inputs[1].value,
      email: inputs[2].value,
      password: inputs[3].value,
      confirmP: inputs[4].value,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      alert("User has been created");
      document.getElementById("register").reset();
    });
}
function sign_out() {
  alert("You have successfully signed out");
  window.location.href = "/index.html";
}

// Get the modal
var mode = document.getElementById("myModal");
var btn = document.getElementById("myyBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  mode.style.display = "block";
}

span.onclick = function() {
  mode.style.display = "none";
}


function closeModal(id){
  document.getElementById(`myModal${id}`).style.display = "none";
  console.log("hello")
}
function openModal(id){
  document.getElementById(`myModal${id}`).style.display= 'block'
}

window.onclick = function(event) {
  if (event.target == modal) {
    mode.style.display = "none";
  }
}