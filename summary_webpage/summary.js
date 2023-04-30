var userScore = localStorage.getItem("userScore");

function rx() {
  score.innerHTML = userScore; 
}

window.addEventListener('load', rx); 