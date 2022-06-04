
const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "images/wizard.jpg",
  health: 60,
  diceScore: 6,
  diceCount: 3
}

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.jpg",
  health: 10,
  diceScore: 4,
  diceCount: 1
}


renderCharactar(hero)
renderCharactar(monster)


function renderCharactar({ elementId, name, avatar, health, diceScore, diceCount }) {
  let diceHtml = ""

  for (let dice = 1; dice <= diceCount; dice++) {
    diceHtml += "<div class='dice'>6</div>"
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