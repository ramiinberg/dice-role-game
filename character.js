import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js"

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
                ${this.diceArray}
              </div>
            </div>
    `
  }

  this.diceArray = getDicePlaceholderHtml(this.diceCount)
}

export default Character