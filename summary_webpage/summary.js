
//easy questions 
var x = [
  {question:'Who produced the first periodic table?', 
   answer:'Dmitri Mendeleev'
  }, 
  {question:'How many elements are in the periodic table?', 
   answer:'118'
  },
  {question:'What element has the symbol Sr?', 
   answer:'Strontium'
  },
  {question:'What do you call the rows of the periodic table?', 
   answer:'period'
  },
  {question:'What is the atomic number of Oxygen?', 
   answer:'8'
  }
]; 

var index = 0; //index for the array x 

//these call the variables stored, the user's score from quiz webpage user's name from main 
var userScore = localStorage.getItem("userScore"); 
var userName = localStorage.getItem("userName");

//function to set up user name, score, as well as setting up the buttons 
function rx() {
  score.innerHTML = userScore; 
  uName.innerHTML = userName;
  prev.style.display = 'none';
  next.style.display = 'none';
}

window.addEventListener('load', rx); //displays function rx on load 

var clicked = 0; //whether or not user clicks on 'show questions' button 

//function to change the button with 'show' id 
function gx() {
  if (clicked == 0) {
    clicked++; 
    next.style.display = 'inline';
    show.innerHTML = 'HIDE QUESTIONS';
    questionHtml.innerHTML = x[index].question;
    answerHtml.innerHTML = x[index].answer;
  }

  else {
    clicked--;
    prev.style.display = 'none';
    next.style.display = 'none';
    show.innerHTML = 'Show Questions';
    questionHtml.innerHTML = '';
    answerHtml.innerHTML = '';
    index=0;
  }
}

show.addEventListener('click', gx);

//function for prev 
function hx() {
  index--;
  questionHtml.innerHTML = x[index].question;
  answerHtml.innerHTML = x[index].answer;
  if (index == 0) {
    prev.style.display = 'none';
  }
  if (index != 4) {
    next.style.display = 'inline';
  }
}

prev.addEventListener('click', hx);

//function for next 
function jx() {
  index++;
  questionHtml.innerHTML = x[index].question;
  answerHtml.innerHTML = x[index].answer;
  if (index == 4) {
    next.style.display = 'none';
  }
  if (index != 0) {
    prev.style.display = 'inline';
  }
}

next.addEventListener('click', jx);