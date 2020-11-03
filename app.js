// --- All the questions in the quiz ---
const questionBank = [{
  question: 'Inside which HTML element do we put the JavaScript?',
  answers: [
    {
      answerText: '<javascript>',
      answerCorrect: false
    },
    {
      answerText: '<script>',
      answerCorrect: true
    },
    {
      answerText: '<js>',
      answerCorrect: false
    },
    {
      answerText: '<scripting>',
      answerCorrect: false
    }
  ]
},
{
  question: 'What is the standard markup language for creating Web pages.',
  answers: [
    {
      answerText: 'CSS',
      answerCorrect: false
    },
    {
      answerText: 'Bootstrap',
      answerCorrect: false
    },
    {
      answerText: 'HTML',
      answerCorrect: true
    },
    {
      answerText: 'JavaScript',
      answerCorrect: false
    }
  ]
},
{
  question: '<h1> is an HTML',
  answers: [
    {
      answerText: 'Element',
      answerCorrect: true
    },
    {
      answerText: 'Style',
      answerCorrect: false
    },
    {
      answerText: 'Script',
      answerCorrect: false
    },
    {
      answerText: 'List',
      answerCorrect: false
    }
  ]
},
{
  question: 'CSS stands for ',
  answers: [
    {
      answerText: 'Comma Seperated Sentences',
      answerCorrect: false
    },
    {
      answerText: 'Conditional Style System',
      answerCorrect: false
    },
    {
      answerText: ' Cascading Style Sheets',
      answerCorrect: true
    },
    {
      answerText: 'Cannot stop singing',
      answerCorrect: false
    }
  ]
},
{
  question: 'In CSS, padding is used to ',
  answers: [
    {
      answerText: 'create space outside of an elements borders',
      answerCorrect: false
    },
    {
      answerText: 'protect an element if it falls',
      answerCorrect: false
    },
    {
      answerText: 'create space inside of an elements borders',
      answerCorrect: false
    },
    {
      answerText: 'do the exact same thing as margins',
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

  //---Load next question or end game---
  counter++
  if (counter < 10) {
    nextQuestion()
  } else {
    gameEnd()
  }
  if (clock < 0) {
    gameEnd()
  }
}

function wrongAnswer() {

  // ---Take 10 seconds off the clock---
  clock = clock - 10
  document.getElementById('timer').textContent = clock

  // ---Tell them they got it wrong---
  document.getElementById('result').innerHTML = '<div class="alert alert-danger" role="alert">Oh no, you missed it!  And you lost 10 seconds, too!</div >'
  //---Load next question or end game---
  counter++
  if (counter < 10) {
    nextQuestion()
  } else {
    gameEnd()
  }
  if (clock < 0) {
    gameEnd()
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
// ---End of game---
function gameEnd() {
  removeElementsByClass()
  //---Game over message with display score---
  document.getElementById('question').textContent = `Game over - Your score was: ${score}`
  document.getElementById('timer').remove()
  // ---Form for getting name---
  document.getElementById('row').innerHTML = `
  <div class="col">
    <input id = 'name' type="text" class="form-control" placeholder="Enter your name for high score records">
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button id = "submit" type="submit" class="btn btn-primary">Submit
    </button>
    </div>
  </div>`

  document.getElementById('submit').addEventListener('click', event => {
    event.preventDefault()
    localStorage.setItem('name', document.getElementById('name').value)
    localStorage.setItem('score', score)
  })
}

