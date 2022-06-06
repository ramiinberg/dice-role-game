
const characterData = {
  hero: {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.jpg",
    health: 60,
    diceCount: 3
  },
  monster: {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.jpg",
    health: 10,
    diceCount: 1
  }
}

function Character(data) {
  Object.assign(this, data)

  this.getDiceHtml = function() {
    return getDiceRollArray(this.diceCount).map(function(dice){
      return `<div class="dice">${dice}</div>`
    }).join('')
  }
  
  this.getCharacterHtml = function() {
    return `<div class="character-card">
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

function render() {
  const wizard = new Character(characterData.hero)
  document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()

  const orc = new Character(characterData.monster)
  document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()
}

function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(function() {
    return Math.floor(Math.random() * 6) + 1
  })
}

render()
