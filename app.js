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
console.log(questionBank[2].answers[2].answerCorrect)

let score = 0
let clock = 60
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
  
  // ---Second Answer---
  document.getElementById('answers').append(answerElem1)
  let answerElem2 = document.createElement('li')
  answerElem2.className = 'list-group-item list-group-item-action answer'
  answerElem2.textContent = (questionBank[0].answers[1].answerText)
  answerElem2.classList.add(questionBank[0].answers[1].answerCorrect)

  // ---Third Answer---
  document.getElementById('answers').append(answerElem2)
  let answerElem3 = document.createElement('li')
  answerElem3.className = 'list-group-item list-group-item-action answer'
  answerElem3.textContent = (questionBank[0].answers[2].answerText)
  answerElem3.classList.add(questionBank[0].answers[2].answerCorrect)

  // ---Fourth Answer---
  document.getElementById('answers').append(answerElem3)
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
  // --- user answers question
  document.addEventListener('click',event => {
    console.log(event.target)
    
    if (event.target.classList.contains('answer')){
      
      if (event.target.classList.contains('true')) {
        correctAnswer()
      }else  {
          wrongAnswer()
        }
      
    }
    
  })

  function correctAnswer(){
    console.log('That is corrrrrect')
    score = score + 100
    document.getElementById('score').textContent = score
  }
  
  function wrongAnswer(){
    console.log('Sorry, wrong answer')
    console.log(clock)
    clock = clock - 10
    document.getElementById('timer').textContent = clock

  }





function nextQuestion() {



  document.getElementById('question').textContent = questionBank[0]

  let answerElem1 = document.createElement('li')
  answerElem1.className = 'list-group-item list-group-item-action'
  answerElem1.textContent = (answerBank[0].answerA)
  // console.log(answerElem1)
  document.getElementById('answers').append(answerElem1)
  let answerElem2 = document.createElement('li')
  answerElem2.className = 'list-group-item list-group-item-action'
  answerElem2.textContent = (answerBank[0].answerB)
  // console.log(answerElem2)
  document.getElementById('answers').append(answerElem2)
  let answerElem3 = document.createElement('li')
  answerElem3.className = 'list-group-item list-group-item-action'
  answerElem3.textContent = (answerBank[0].answerC)
  // console.log(answerElem3)
  document.getElementById('answers').append(answerElem3)
  let answerElem4 = document.createElement('li')
  answerElem4.className = 'list-group-item list-group-item-action'
  answerElem4.textContent = (answerBank[0].answerD)
  // console.log(answerElem4)
  document.getElementById('answers').append(answerElem4)

}
