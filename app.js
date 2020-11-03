// --- All the questions in the quiz ---
const questionBank = [{
  question: 'Question1 text',
  answers: [
    {
      answerText: 'Option A',
      answerCorrect: true
    },
    {
      answerText: 'Option B',
      answerCorrect: false
    },
    {
      answerText: 'Option C',
      answerCorrect: false
    },
    {
      answerText: 'Option D',
      answerCorrect: false
    }
  ]
},
{
  question: 'Question2 text',
  answers: [
    {
      answerText: 'Option A',
      answerCorrect: true
    },
    {
      answerText: 'Option B',
      answerCorrect: false
    },
    {
      answerText: 'Option C',
      answerCorrect: false
    },
    {
      answerText: 'Option D',
      answerCorrect: false
    }
  ]
},
{
  question: 'Question3 text',
  answers: [
    {
      answerText: 'Option A',
      answerCorrect: true
    },
    {
      answerText: 'Option B',
      answerCorrect: false
    },
    {
      answerText: 'Option C',
      answerCorrect: false
    },
    {
      answerText: 'Option D',
      answerCorrect: false
    }
  ]
},
{
  question: 'Question4 text',
  answers: [
    {
      answerText: 'Option A',
      answerCorrect: true
    },
    {
      answerText: 'Option B',
      answerCorrect: false
    },
    {
      answerText: 'Option C',
      answerCorrect: false
    },
    {
      answerText: 'Option D',
      answerCorrect: false
    }
  ]
},
{
  question: 'Question5 text',
  answers: [
    {
      answerText: 'Option A',
      answerCorrect: true
    },
    {
      answerText: 'Option B',
      answerCorrect: false
    },
    {
      answerText: 'Option C',
      answerCorrect: false
    },
    {
      answerText: 'Option D',
      answerCorrect: false
    }
  ]
},
{
  question: 'Question6 text',
  answers: [
    {
      answerText: 'Option A',
      answerCorrect: true
    },
    {
      answerText: 'Option B',
      answerCorrect: false
    },
    {
      answerText: 'Option C',
      answerCorrect: false
    },
    {
      answerText: 'Option D',
      answerCorrect: false
    }
  ]
},
{
  question: 'Question7 text',
  answers: [
    {
      answerText: 'Option A',
      answerCorrect: true
    },
    {
      answerText: 'Option B',
      answerCorrect: false
    },
    {
      answerText: 'Option C',
      answerCorrect: false
    },
    {
      answerText: 'Option D',
      answerCorrect: false
    }
  ]
},
{
  question: 'Question8 text',
  answers: [
    {
      answerText: 'Option A',
      answerCorrect: true
    },
    {
      answerText: 'Option B',
      answerCorrect: false
    },
    {
      answerText: 'Option C',
      answerCorrect: false
    },
    {
      answerText: 'Option D',
      answerCorrect: false
    }
  ]
},
{
  question: 'Question9 text',
  answers: [
    {
      answerText: 'Option A',
      answerCorrect: true
    },
    {
      answerText: 'Option B',
      answerCorrect: false
    },
    {
      answerText: 'Option C',
      answerCorrect: false
    },
    {
      answerText: 'Option D',
      answerCorrect: false
    }
  ]
},
{
  question: 'Question10 text',
  answers: [
    {
      answerText: 'Option A',
      answerCorrect: true
    },
    {
      answerText: 'Option B',
      answerCorrect: false
    },
    {
      answerText: 'Option C',
      answerCorrect: false
    },
    {
      answerText: 'Option D',
      answerCorrect: false
    }
  ]
}]
// console.log(questionBank[2].answers[2].answerCorrect)

let score = 0
let clock = 60
let counter = 0


// ---Put score on the page---
document.getElementById('score').textContent = score
// ---Put timer on page---
document.getElementById('timer').textContent = clock
// ---Start Quiz Button---
document.getElementById('start').addEventListener('click', event => {
  // ---Remove Start Button---
  event.target.remove()

  // ---Load first question to screen
  document.getElementById('question').textContent = questionBank[0].question

  // ---Load first four multiple choice answers to screen
  // ---First Answer---
  let answerElem1 = document.createElement('li')
  answerElem1.className = 'list-group-item list-group-item-action answer'
  answerElem1.textContent = (questionBank[0].answers[0].answerText)
  answerElem1.classList.add(questionBank[0].answers[0].answerCorrect)
  document.getElementById('answers').append(answerElem1)

  // ---Second Answer---
  let answerElem2 = document.createElement('li')
  answerElem2.className = 'list-group-item list-group-item-action answer'
  answerElem2.textContent = (questionBank[0].answers[1].answerText)
  answerElem2.classList.add(questionBank[0].answers[1].answerCorrect)
  document.getElementById('answers').append(answerElem2)

  // ---Third Answer---
  let answerElem3 = document.createElement('li')
  answerElem3.className = 'list-group-item list-group-item-action answer'
  answerElem3.textContent = (questionBank[0].answers[2].answerText)
  answerElem3.classList.add(questionBank[0].answers[2].answerCorrect)
  document.getElementById('answers').append(answerElem3)

  // ---Fourth Answer---
  let answerElem4 = document.createElement('li')
  answerElem4.className = 'list-group-item list-group-item-action answer'
  answerElem4.textContent = (questionBank[0].answers[3].answerText)
  answerElem4.classList.add(questionBank[0].answers[3].answerCorrect)
  document.getElementById('answers').append(answerElem4)

  // --- start clock


  let time = setInterval(() => {
    clock--
    document.getElementById('timer').textContent = clock
  }, 1000)
})


// --- get user's answer---
document.addEventListener('click', event => {

  if (event.target.classList.contains('answer')) {

    if (event.target.classList.contains('true')) {
      correctAnswer()
    } else {
      wrongAnswer()
    }
  }
})


// ---What happens if they get the answer right---
function correctAnswer() {


  // ---Increase score---
  score = score + 100
  document.getElementById('score').textContent = score

  // ---Tell them they got it right---
  document.getElementById('result').innerHTML = '<div class="alert alert-success" role="alert">Great job! You got it right!</div >'

  //---Load next question---
  counter++
  if (counter < 10) {
    nextQuestion()
  } else {
    removeElementsByClass()
    document.getElementById('question').textContent = 'Game over'
  }
  if (clock < 0) {
    removeElementsByClass()
    document.getElementById('question').textContent = 'Time is up!'
    clock = 0
  }
}

function wrongAnswer() {

  // ---Take 10 seconds off the clock---
  clock = clock - 10
  document.getElementById('timer').textContent = clock

  // ---Tell them they got it wrong---
  document.getElementById('result').innerHTML = '<div class="alert alert-danger" role="alert">Oh no, you missed it!  And you lost 10 seconds, too!</div >'
  //---Load next question---
  counter++
  if (counter < 10) {
    nextQuestion()
  } else
  {
    removeElementsByClass()
    document.getElementById('question').textContent = 'Game over'
  }
  if (clock < 0) {
    removeElementsByClass()
    document.getElementById('question').textContent = 'Time is up!'
    clock = 0
  }
}

// ---Function to remove previous answers *found on stack overflow---
function removeElementsByClass(className) {
  var elements = document.getElementsByClassName('answer');
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function nextQuestion() {

  // ---Load next question to screen
  document.getElementById('question').textContent = questionBank[counter].question

  // ---Remove previous answers---
  removeElementsByClass()
  

  // ---Load next four multiple choice answers to screen
  // ---First Answer---
  let answerElem1 = document.createElement('li')
  answerElem1.className = 'list-group-item list-group-item-action answer'
  answerElem1.textContent = (questionBank[counter].answers[0].answerText)
  answerElem1.classList.add(questionBank[counter].answers[0].answerCorrect)
  document.getElementById('answers').append(answerElem1)

  // ---Second Answer---
  let answerElem2 = document.createElement('li')
  answerElem2.className = 'list-group-item list-group-item-action answer'
  answerElem2.textContent = (questionBank[counter].answers[1].answerText)
  answerElem2.classList.add(questionBank[counter].answers[1].answerCorrect)
  document.getElementById('answers').append(answerElem2)

  // ---Third Answer---
  let answerElem3 = document.createElement('li')
  answerElem3.className = 'list-group-item list-group-item-action answer'
  answerElem3.textContent = (questionBank[counter].answers[2].answerText)
  answerElem3.classList.add(questionBank[counter].answers[2].answerCorrect)
  document.getElementById('answers').append(answerElem3)

  // ---Fourth Answer---
  let answerElem4 = document.createElement('li')
  answerElem4.className = 'list-group-item list-group-item-action answer'
  answerElem4.textContent = (questionBank[counter].answers[3].answerText)
  answerElem4.classList.add(questionBank[counter].answers[3].answerCorrect)
  document.getElementById('answers').append(answerElem4)

}
