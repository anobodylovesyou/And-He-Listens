function login() {
  const password = document.getElementById("password").value;
  const correctPassword = "Paro143";

  if (password === correctPassword) {
    sessionStorage.setItem("isLoggedIn", "true");
    window.location.href = "grievance.html";
  } else {
    alert("Wrong password, try again 💔");
  }
}


function checkAuth() {
  if (sessionStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html";
    alert("Access denied. Please log in first 💌");
    
  }
}
