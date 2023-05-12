
//function used to store the user's name 
function d() {
  userNameJs = document.getElementById('userName').value; 
  localStorage.setItem("userName", userNameJs); //local storage used 
}

submit.addEventListener('click', d);