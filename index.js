import characterData from "./data.js"
import { getDiceRollArray } from "./utils.js"

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

render()
