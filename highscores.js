let highScores = JSON.parse(localStorage.getItem('highScores'))
console.log(highScores[0])

scoreArray =[]
nameArray=[]
for (let i = 0; i<highScores.length; i++) {
nameArray.push(highScores[i].name)
}
console.log(nameArray)
for (let i = 0; i < highScores.length; i++) {
  scoreArray.push(highScores[i].score)
}
console.log(scoreArray)
const allScores = () => {
  document.getElementById('scores').innerHTML = ''
  for (let i = 0; i < highScores.length; i++) {
    console.log[i]
    let scoreDisplay = document.createElement('li')
    scoreDisplay.className = 'list-group-item d-flex justify-content-between align-items-center'
    scoreDisplay.innerHTML = highScores[i].score
    document.getElementById('scores').append(scoreDisplay)
    }
  }

const allNames = () => {
  document.getElementById('names').innerHTML = ''
  for (let i = 0; i < highScores.length; i++) {
    console.log[i]
    let scoreDisplay = document.createElement('li')
    scoreDisplay.className = 'list-group-item d-flex justify-content-between align-items-center'
    scoreDisplay.innerHTML = highScores[i].name
    document.getElementById('scores').append(scoreDisplay)
  }
}

allScores()
allNames()
