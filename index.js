
const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "images/wizard.jpg",
  health: 60,
  diceScore: [3, 1, 4],
  diceCount: 3
}

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.jpg",
  health: 10,
  diceScore: [2],
  diceCount: 1
}


renderCharactar(hero)
renderCharactar(monster)


function renderCharactar({ elementId, name, avatar, health, diceScore, diceCount }) {
  let diceHtml = ""

  for (let i = 0; i < diceCount; i++) {
    diceHtml += `<div class="dice">${diceScore[i]}</div>`
  }

  document.getElementById(elementId).innerHTML = `
  <div class="character-card">
    <h4 class="name"> ${name} </h4>
    <img class="avatar" src="${avatar}"/>
    <p class="health">health: <b> ${health} </b></p>
    <div class="dice-container">
      ${diceHtml}
    </div>
  </div>
  `
}