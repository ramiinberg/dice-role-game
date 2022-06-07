import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js"

function Character(data) {
  Object.assign(this, data)

  this.getDiceHtml = function() {
    this.currentDiceScore = getDiceRollArray(this.diceCount)
    this.diceArray = this.currentDiceScore.map(function(num){
      return `<div class="dice">${num}</div>`
    }).join('')
  }
  
  this.getCharacterHtml = function() {
    const { name, avatar, health, diceArray } = this
    return `<div class="character-card">
              <h4 class="name"> ${name} </h4>
              <img class="avatar" src="${avatar}"/>
              <p class="health">health: <b> ${health} </b></p>
              <div class="dice-container">
                ${diceArray}
              </div>
            </div>
    `
  }

  this.diceArray = getDicePlaceholderHtml(this.diceCount)

  this.takeDamage = function(attackScoreArray) {
    console.log(`${attackScoreArray}`)
  }
}

export default Character