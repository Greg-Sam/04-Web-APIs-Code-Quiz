const questionBank = ['Question 1 text', 'Question 2 text', 'Question 3 text', 'Question 4 text', 'Question 5 text', 'Question 6 text', 'Question 7 text', 'Question 8 text', 'Question 9 text', 'Question 10 text']

const answer1 = {
  answerA: [
    {text:'First choice',
    correct: true}]
}
console.log(answer1.answerA[0].correct)

if answer1.answerA[0].correct === true {
  console.log('true')
}

const answerBank = [
  {
    answerA: 'First choice',
    correctA: true,
    answerB: 'Second choice',
    correctB: false,
    answerC: 'Third choice',
    correctC: false,
    answerD: 'Fourth choice',
    correctD: false
  },
  {
    answerA: 'First choice',
    correctA: true,
    answerB: 'Second choice',
    correctB: false,
    answerC: 'Third choice',
    correctC: false,
    answerD: 'Fourth choice',
    correctD: false
  },
  {
    answerA: 'First choice',
    correctA: true,
    answerB: 'Second choice',
    correctB: false,
    answerC: 'Third choice',
    correctC: false,
    answerD: 'Fourth choice',
    correctD: false
  },
  {
    answerA: 'First choice',
    correctA: true,
    answerB: 'Second choice',
    correctB: false,
    answerC: 'Third choice',
    correctC: false,
    answerD: 'Fourth choice',
    correctD: false
  },
  {
    answerA: 'First choice',
    correctA: true,
    answerB: 'Second choice',
    correctB: false,
    answerC: 'Third choice',
    correctC: false,
    answerD: 'Fourth choice',
    correctD: false
  },
  {
    answerA: 'First choice',
    correctA: true,
    answerB: 'Second choice',
    correctB: false,
    answerC: 'Third choice',
    correctC: false,
    answerD: 'Fourth choice',
    correctD: false
  },
  {
    answerA: 'First choice',
    correctA: true,
    answerB: 'Second choice',
    correctB: false,
    answerC: 'Third choice',
    correctC: false,
    answerD: 'Fourth choice',
    correctD: false
  },
  {
    answerA: 'First choice',
    correctA: true,
    answerB: 'Second choice',
    correctB: false,
    answerC: 'Third choice',
    correctC: false,
    answerD: 'Fourth choice',
    correctD: false
  },
  {
    answerA: 'First choice',
    correctA: true,
    answerB: 'Second choice',
    correctB: false,
    answerC: 'Third choice',
    correctC: false,
    answerD: 'Fourth choice',
    correctD: false
  },
  {
    answerA: 'First choice',
    correctA: true,
    answerB: 'Second choice',
    correctB: false,
    answerC: 'Third choice',
    correctC: false,
    answerD: 'Fourth choice',
    correctD: false
  },
]
// console.log(questionBank[0])
console.log(answerBank[0].answerC)

let score = 0
let clock = 60
document.getElementById('timer').textContent = clock
// ---Start Quiz Button
document.getElementById('start').addEventListener('click', event => {
  event.preventDefault()
  console.log('hi')

  // ---Load first question to screen
  document.getElementById('question').textContent = questionBank[0]

  // ---Load first four multiple choice answers to screen
  let answerElem1 = document.createElement('li')
  answerElem1.className = 'list-group-item list-group-item-action'
  answerElem1.textContent = (answer1.answerA[0].text)
  
  
  
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

  // --- start clock


  let time = setInterval(() => {
    clock--
    document.getElementById('timer').textContent = clock
  }, 1000)
})
  // --- user answers question
  document.addEventListener('click',event => {
    console.log(event)
  })
  
  









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
