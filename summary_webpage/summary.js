
//list of questions 
var x = [
  {
    question:'Who produced the first periodic table?', 
    answer:'Dmitri Mendeleev'
  }, 
  {
    question:'How many elements are in the periodic table?', 
    answer:'118'
  },
  {
    question:'What element has the symbol Sr?', 
    answer:'Strontium'
  },
  {
    question:'What do you call the rows of the periodic table?', 
    answer:'period'
  },
  {
    question:'What is the atomic number of Oxygen?', 
    answer:'8'
  },
  {
    question: 'The atomic number of an element indicates the number of ______ in the nucleus',
    answer: 'protons'
  },
  {
    question: 'The group number of an element indicates the number of ______ electrons',
    answer: 'valence'
  },
  {
    question: 'The atomic radius ______ as you go from top to bottom of the periodic table',
    answer: 'increases'
  }, 
  {
    question: 'What is the first and last element?',
    answer: 'hydrogen and oganesson'
  },
  {
    question: 'Hydrogen is the most prevalent element in the universe. What is the second most prevalent?',
    answer: 'helium'
  },
  {
    question: 'What are the two missing letters in all the element symbols?',
    answer: 'j and q'
  },
  {
    question: 'The 4 most recent elements are 113 (Nh), 115 (Mc), 117 (Ts), and 118 (O). What is the name of symbol Ts?',
    answer: 'tennessine'
  },
  {
    question: 'When was the first artificially created element, technetium, first synthesized?',
    answer: '1937'
  },
  {
    question: 'What organization controls the periodic table?',
    answer: 'IUPAC'
  },
  {
    question: 'What is the element with the name of the superhero, Thor?',
    answer: 'Thorium'
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
    questionHtml.innerHTML = `Question: ${x[index].question}`;
    answerHtml.innerHTML = `Answer: ${x[index].answer}`;
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
  questionHtml.innerHTML = `Question: ${x[index].question}`;
  answerHtml.innerHTML = `Answer: ${x[index].answer}`;
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
  questionHtml.innerHTML = `Question: ${x[index].question}`;
  answerHtml.innerHTML = `Answer: ${x[index].answer}`;
  if (index == 14) {
    next.style.display = 'none';
  }
  if (index != 0) {
    prev.style.display = 'inline';
  }
}

next.addEventListener('click', jx);

var tempLb = JSON.parse(localStorage.getItem('a'));

//short leaderboard based on score by descending order 
tempLb.sort((a, b) => {
    return b.score - a.score;
});

var lbHtml = document.getElementsByName('lb'); 
var pHtml = document.getElementsByName('lbP'); 
var scoreHtml = document.getElementsByName('lbScore'); 

var lbLength = tempLb.length; 
var rank; 

//this is so that it only displays the top 10 if there are more than 10 plays
if (tempLb.length > 10) {
  lbLength = 10; 
}

for (var i = 0; i < 10; i++) {
  pHtml[i].style.display = 'none'; 
}

//identifying the rank of the user 
for (var i = 0; i < tempLb.length; i++) {
  if (tempLb[i].name == userName) {
    rank = i+1; 
  }
}

rankU.innerHTML = rank; 

//unhiding the appropriate number of users in leaderboard if there are less than 10 plays
for (var i = 0; i < lbLength; i++) {
  pHtml[i].style.display = 'block'; 
  lbHtml[i].innerHTML = tempLb[i].name;
  scoreHtml[i].innerHTML = `....... ${tempLb[i].score}/15`;
}