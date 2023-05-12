
//easy questions, with the question, answer, choices, and facts 
var x = [
  {question:'Who produced the first periodic table?', 
   answer:'choiceB',
   a:'Johann Dobereiner', 
   b:'Dmitri Mendeleev', 
   c:'Clemens Winkler', 
   factJs:'Dmitri Ivanovich Mendeleev, a Russian chemist, produced the first periodic table of elements. He also used the Periodic Law to predict three elements’ properties that were yet to be discovered. '
  }, 
  {question:'How many elements are in the periodic table?', 
   answer:'choiceC',
   a: '112',
   b: '116',
   c: '118',
   factJs:'The periodic table has 118 elements as of 2023.'
  },
  {question:'What element has the symbol Sr?', 
   answer:'choiceC',
   a: 'Sulfur',
   b: 'Selenium',
   c: 'Strontium',
   factJs:'Strontium, atomic number 38, is an alkaline earth metal. It is highly reactive and is silver-white yellowish in color.'
  },
  {question:'What do you call the rows of the periodic table?', 
   answer:'choiceA',
   a: 'period',
   b: 'family',
   c: 'group',
   factJs:'A period is a row in the periodic table. Elements in a period have the same number of energy levels/electron shells. '
  },
  {question:'What is the atomic number of Oxygen?', 
   answer:'choiceC',
   a: '1',
   b: '5', 
   c: '8',
   factJs:'Oxygen, atomic number 8, is a highly reactive non-metal. It is the 3rd most abundant element in the universe and was first used by Antoine Lavoisier, a French chemist. '
  }
]; 

//average questions 
var avg = [
  {
    
  }
]

//difficult questions 
var diff = [
  {
    
  }
]

var userScore = 0; //variable to track user's scores 
var index = 0; //index for the easy questions 

//starting function to set up the question layout 
function start() {
  document.getElementById('question').innerHTML = x[index].question; 
  diff.innerHTML = 'Easy'; 
  qNum.innerHTML = index+1; 
  choice1.innerHTML = x[index].a;
  choice2.innerHTML = x[index].b;
  choice3.innerHTML = x[index].c;
  next.style.display = 'none'; 
  uStat.style.display = 'none';
}

window.addEventListener('load', start); //displays first question & choices

var radios = document.getElementsByName('userAns'); //var to store the radio buttons 

//this function is called when a radio button is clicked 
function kx() {
  question.innerHTML = ''; 
  if (index < 5) {
    uStat.style.display = 'block';
    uStat.innerHTML = 'You are incorrect.';
    if (this.value == x[index].answer) {
      userScore++;
      uStat.innerHTML = 'You are correct!';
    }
    fact.innerHTML = x[index].factJs; 
    radios[0].style.display = 'none'; 
    radios[1].style.display = 'none'; 
    radios[2].style.display = 'none'; 
    choice1.style.display = 'none';
    choice2.style.display = 'none';
    choice3.style.display = 'none';
    next.style.display = 'block'; 
  }
    
  else {
    if (this.value == x[index].answer) {
      userScore++;
      uStat.innerHTML = 'You are correct!';
    }
    localStorage.setItem("userScore", userScore);

    document.getElementById("form").submit();
  }
}

//for loop to add kx function to all radio button choices 
for (var i=0; i<3; i++) {
  radios[i].addEventListener("change", kx);
}

//this function is called when the user wants to go to the next question 
function fx() {
  if (index < 4) {
    index++;
    document.getElementById('question').innerHTML = x[index].question; 
    qNum.innerHTML = index+1; 
    fact.innerHTML = ''; 
    radios[0].style.display = 'inline'; 
    radios[1].style.display = 'inline'; 
    radios[2].style.display = 'inline'; 
    choice1.style.display = 'inline';
    choice2.style.display = 'inline';
    choice3.style.display = 'inline';
    choice1.innerHTML = x[index].a;
    choice2.innerHTML = x[index].b;
    choice3.innerHTML = x[index].c; 

    for (var i = 0; i < 3; i++) {
      if (radios[i].checked) {
        radios[i].checked = false;
        break;
      }
    }
    next.style.display = 'none'; 
    uStat.style.display = 'none';
    
  }
    
  else {
    localStorage.setItem("userScore", userScore);
    index++;
    document.getElementById("form").submit();
  }

  
}

document.getElementById('next').addEventListener('click', fx);