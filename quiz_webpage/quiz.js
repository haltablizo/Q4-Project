var x = [
  {question:'Who produced the first periodic table?', 
   answer:'Dmitri Mendeleev',
   a:'Johann Dobereiner',
   b:'Dmitri Mendeleev', 
   c:'Clemens Winkler'
  }, 
  {question:'How many elements are in the periodic table?', a:'118'},
  {question:'What element has the symbol Sr?', a:'Strontium'},
  {question:'What do you call the rows of the periodic table?', a:'period'},
  {question:'What is the atomic number of Oxygen?', a:'8'}
]; 

var userScore = 0; 
var index = 0; 

function start() {
  document.getElementById('question').innerHTML = x[index].question; 
  next.innerHTML = 'Next'; 
}

window.addEventListener('load', start);

function dx() {
  if (index < 4) {
    if (userAns.value == x[index].answer) userScore++;
    index++;
    document.getElementById('question').innerHTML = x[index].question; 
    userAns.value = ''; 
  }
  else {
    if (userAns.value == x[index].answer) userScore++;
    index++;
    localStorage.setItem("userScore", userScore);

    document.getElementById("form").submit();
  }
}

document.getElementById('next').addEventListener('click', dx);