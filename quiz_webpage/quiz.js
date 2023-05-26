
//questions, with the question, answer, choices, and facts 
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
  }, 
  {
    question:'The atomic number of an element indicates the number of ______ in the nucleus',
    answer: 'choiceA',
    a: 'protons',
    b: 'electrons',
    c: 'neutrons',
    factJs:'The number of protons in the nucleus indicates the atomic number of an element which ranges from 1 to 118.'
  },
  {
    question: 'The group number of an element indicates the number of ______ electrons',
    answer: 'choiceB',
    a: 'core',
    b: 'valence',
    c: 'isotope',
    factJs: 'As the number of valence electrons indicate the group number of an element, they help in determining reactivity and chemical properties.'
  },
  {
    question: 'The atomic radius ______ as you go from top to bottom of the periodic table.',
    answer: 'choiceA',
    a: 'increases',
    b: 'decreases',
    c: 'stays the same',
    factJs: 'Atomic radius increases from top to bottom of the periodic table. '
  },
  {
    question: 'What is the first and last element?',
    answer: 'choiceC',
    a: 'hydrogen and moscovium',
    b: 'hydrogen and nihonium',
    c: 'hydrogen and oganesson',
    factJs: 'Hydrogen (H) has an atomic number of 1, which means it is the first element. On the other hand, the last element is Oganesson (Og) which has an atomic number of 118. '
  },
  {
    question: ' Hydrogen is the most prevalent element in the universe. What is the second most prevalent?',
    answer: 'choiceA',
    a: 'helium',
    b: 'oxygen',
    c: 'nitrogen',
    factJs: 'Helium has atomic number 2 and symbol He. This element is colorless, tasteless, and odorless.'
  },
  {
    question: 'What are the two missing letters in all the element symbols? Please answer alphabetically. (Format: letter1 and letter2)',
    answer: 'j and q', 
    factJs: 'There is no letter J and Q in all the element symbols of the periodic table.'
  },
  {
    question: 'The 4 most recent elements are 113 (Nh), 115 (Mc), 117 (Ts), and 118 (O). What is the name of symbol Ts?',
    answer: 'tennessine',
    factJs: 'Tennessine is one of the newest elements, named in 2016. It is solid at STP.'
  },
  {
    question: 'When was the first artificially created element, technetium, first synthesized?',
    answer: '1937',
    factJs: 'Technetium is the lightest element with its isotopes all being radioactive. It is a shiny gray metal and has a melting point of 2430 K. '
  },
  {
    question: 'What organization controls the periodic table? Note: acronym only',
    answer: 'iupac',
    factJs: 'International Union of Pure Applied Chemistry (IUPAC) headquarters is located in Zurich, Switzerland. IUPAC internationally represents chemistry and related sciences & technologies.'
  },
  {
    question: 'What is the element with the name of the superhero, Thor?',
    answer: 'thorium',
    factJs: 'Thorium (Th), atomic number 90, is malleable and has a high boiling point. When exposed to air, it tarnishes black and forms thorium dioxide. '
  }
]; 


var userScore = 0; //variable to track user's scores 
var index = 0; //index for the questions 

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
  nextDiff.style.display = 'none'; 
  textDiff.style.display = 'none'; 
}

window.addEventListener('load', start); //displays first question & choices

var radios = document.getElementsByName('userAns'); //var to store the radio buttons 

//this function is called when a radio button is clicked 
function kx() {
  question.innerHTML = ''; 
  if (index < 10) {
    uStat.style.display = 'block';
    uStat.innerHTML = 'You are incorrect.';
    if (this.value == x[index].answer) {
      userScore++;
      streakSpan.innerHTML++; 
      uStat.innerHTML = 'You are correct!';
    }
    else {
      streakSpan.innerHTML = 0; 
    }
    fact.innerHTML = x[index].factJs; 
    radios[0].style.display = 'none'; 
    radios[1].style.display = 'none'; 
    radios[2].style.display = 'none'; 
    choice1.style.display = 'none';
    choice2.style.display = 'none';
    choice3.style.display = 'none';
    streakSpan.style.display = 'none'; 
    streakP.style.display = 'none'; 
    next.style.display = 'block'; 
  }
    
  else {
    if (this.value == x[index].answer) {
      userScore++;
      streakSpan.innerHTML++;
      uStat.innerHTML = 'You are correct!';
    }
    else {
      streakSpan.innerHTML = 0; 
    }
  }
}

//for loop to add kx function to all radio button choices 
for (var i=0; i<3; i++) {
  radios[i].addEventListener("change", kx);
}

//this function is called when the user wants to go to the next question 
function fx() {
  if (index == 4) {
    diff.innerHTML = 'Average'; 
  } 
  if (index < 9) {
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
    streakSpan.style.display = 'inline'; 
    streakP.style.display = 'inline'; 

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
    
  else if (index == 9) {
    index++; 
    next.style.display = 'none'; 
    uStat.style.display = 'none';
    fact.innerHTML = '';
    radios[0].style.display = 'none'; 
    radios[1].style.display = 'none'; 
    radios[2].style.display = 'none'; 
    choice1.style.display = 'none';
    choice2.style.display = 'none';
    choice3.style.display = 'none';
    nextDiff.style.display = 'inline-block'; 
    textDiff.style.display = 'block'; 
    diff.innerHTML = 'Difficult';    
    qNum.innerHTML = index+1; 
    document.getElementById('question').innerHTML = x[index].question; 
    streakSpan.style.display = 'inline'; 
    streakP.style.display = 'inline'; 
  }

  else if (index > 9 && index < 14) {
    index++;
    document.getElementById('question').innerHTML = x[index].question; 
    nextDiff.style.display = 'inline-block'; 
    textDiff.style.display = 'block'; 
    qNum.innerHTML = index+1; 
    fact.innerHTML = ''; 
    next.style.display = 'none'; 
    uStat.style.display = 'none';
    streakSpan.style.display = 'inline'; 
    streakP.style.display = 'inline'; 
  }

  else if (index == 14) {
    localStorage.setItem("userScore", userScore);
    var tempLb = JSON.parse(localStorage.getItem('a'));
    tempLb[tempLb.length-1].score = userScore; 
    localStorage.setItem('a', JSON.stringify(tempLb));
    document.getElementById("form").submit();
  }
}

document.getElementById('next').addEventListener('click', fx);


function yx() {
  question.innerHTML = ''; 
  if (index < 15) {
    uStat.style.display = 'block';
    uStat.innerHTML = 'You are incorrect.';
    if (textDiff.value.toLowerCase() == x[index].answer) { 
      userScore++;
      streakSpan.innerHTML++; 
      uStat.innerHTML = 'You are correct!';
    }
    else {
      streakSpan.innerHTML = 0; 
    }
    fact.innerHTML = x[index].factJs; 
    next.style.display = 'block';
    nextDiff.style.display = 'none';
    textDiff.value = ''; 
    textDiff.style.display = 'none'; 
    streakSpan.style.display = 'none'; 
    streakP.style.display = 'none';  
  }
}

nextDiff.addEventListener('click', yx);