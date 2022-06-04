

const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "images/wizard.jpg",
  health: 60,
  diceScore: 6
}

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.jpg",
  health: 10,
  diceScore: 4
}

renderCharactar(hero)
renderCharactar(monster)


function renderCharactar({ elementId, name, avatar, health, diceScore }) {
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