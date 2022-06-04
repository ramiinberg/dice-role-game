const heroElementId = "hero"
const heroName = "Wizard"
const heroAvatar = "images/wizard.jpg"
const heroHealth = 60
const heroDiceScore = 6

const monsterElementId = "monster"
const monsterName = "Orc"
const monsterAvatar = "images/orc.jpg"
const monsterHealth = 10
const monsterDiceScore = 4

renderCharactar(heroElementId, heroName, heroAvatar, heroHealth, heroDiceScore)
renderCharactar(monsterElementId, monsterName, monsterAvatar, monsterHealth, monsterDiceScore)


function renderCharactar(elementId, name, avatar, health, diceScore) {
  document.getElementById(elementId).innerHTML = `
  <div class="character-card">
    <h4 class="name"> ${name} </h4>
    <img class="avatar" src="${avatar}"/>
    <p class="health">health: <b> ${health} </b></p>
    <div class="dice-container">
      <div class="dice"> ${diceScore} </div>
    </div>
  </div>
  `
}