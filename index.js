
const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "images/wizard.jpg",
  health: 60,
  diceCount: 3
}

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.jpg",
  health: 10,
  diceCount: 1
}

function renderCharactar({ elementId, name, avatar, health, diceCount }) {
  document.getElementById(elementId).innerHTML = `
  <div class="character-card">
    <h4 class="name"> ${name} </h4>
    <img class="avatar" src="${avatar}"/>
    <p class="health">health: <b> ${health} </b></p>
    <div class="dice-container">
      ${getDiceHtml(diceCount)}
    </div>
  </div>
  `
}

function getDiceHtml(diceCount) {
  return getDiceRollArray(diceCount).map(function(dice){
    return `<div class="dice">${dice}</div>`
  }).join('')
}

function getDiceRollArray(diceCount) {
  const diceArray = []
  for(let i = 0; i < diceCount; i++) {
    diceArray.push(Math.floor(Math.random() * 6) + 1)
  }
  return diceArray
}

renderCharactar(hero)
renderCharactar(monster)
getDiceRollArray(3)
