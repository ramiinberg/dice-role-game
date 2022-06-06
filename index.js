
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

function Character(data) {
  Object.assign(this, data)

  this.getDiceHtml = function() {
    return getDiceRollArray(this.diceCount).map(function(dice){
      return `<div class="dice">${dice}</div>`
    }).join('')
  }
  
  this.getCharacterHtml = function() {
    return document.getElementById(this.elementId).innerHTML = `
    <div class="character-card">
      <h4 class="name"> ${this.name} </h4>
      <img class="avatar" src="${this.avatar}"/>
      <p class="health">health: <b> ${this.health} </b></p>
      <div class="dice-container">
        ${this.getDiceHtml(this.diceCount)}
      </div>
    </div>
    `
  }
}

const wizard = new Character(hero)
wizard.getCharacterHtml()
const orc = new Character(monster)
orc.getCharacterHtml()

function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(function() {
    return Math.floor(Math.random() * 6) + 1
  })
}
