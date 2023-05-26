
var temp = JSON.parse(localStorage.getItem('a'));

if (temp == null) {
  var temp = [];
  localStorage.setItem('a', JSON.stringify(temp));
  console.log('this was created');
}

//function used to store the user's name 
function d() {
  userNameJs = document.getElementById('userName').value; 
  localStorage.setItem("userName", userNameJs); //local storage used 
  temp.push({name: userNameJs, score: 0});
  localStorage.setItem('a', JSON.stringify(temp)); 
}

submit.addEventListener('click', d);