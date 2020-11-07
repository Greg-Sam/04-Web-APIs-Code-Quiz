let highScores = JSON.parse(localStorage.getItem('highScores'))
console.log(highScores)
if (highScores[0].name === 'Empty') {
  highScores.shift()
}

function order() {
  highScores.sort(function (a, b) { return b.score - a.score })
  console.log(highScores)

}
order()
function displayScores() {
  for (let i = 0; i < highScores.length; i++) {
    let nameAndScore = document.createElement('li')
    nameAndScore.className = 'list-group-item d-flex justify-content-between align-items-center'
    nameAndScore.innerHTML = highScores[i].name + ' - ' + highScores[i].score
    document.getElementById('scores').append(nameAndScore)
  }
}
displayScores()

