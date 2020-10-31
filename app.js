const questionBank = ['Question 1 text', 'Question 2 text', 'Question 3 text', 'Question 4 text', 'Question 5 text', 'Question 6 text', 'Question 7 text', 'Question 8 text', 'Question 9 text', 'Question 10 text']

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
console.log(questionBank[0])
console.log(answerBank[0].answerC)

function nextQuestion(params) {
  
}

document.getElementById('question').textContent = questionBank[0]

let answerElem1 = document.createElement('li')
answerElem1.className = 'list-group-item list-group-item-action'
answerElem1.textContent = (answerBank[0].answerA)
console.log(answerElem1)
document.getElementById('answers').append(answerElem1)
let answerElem2 = document.createElement('li')
answerElem2.className = 'list-group-item list-group-item-action'
answerElem2.textContent = (answerBank[0].answerB)
console.log(answerElem2)
document.getElementById('answers').append(answerElem2)
let answerElem3 = document.createElement('li')
answerElem3.className = 'list-group-item list-group-item-action'
answerElem3.textContent = (answerBank[0].answerC)
console.log(answerElem3)
document.getElementById('answers').append(answerElem3)
let answerElem4 = document.createElement('li')
answerElem4.className = 'list-group-item list-group-item-action'
answerElem4.textContent = (answerBank[0].answerD)
console.log(answerElem4)
document.getElementById('answers').append(answerElem4)


