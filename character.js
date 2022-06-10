import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js"

function Character(data) {
  Object.assign(this, data)

  this.maxHealth = this.health

  this.getDiceHtml = function() {
    this.currentDiceScore = getDiceRollArray(this.diceCount)
    this.diceArray = this.currentDiceScore.map(num =>
      `<div class="dice">${num}</div>`).join('')
  }
  
  this.getCharacterHtml = function() {
    const { name, avatar, health, diceArray } = this

    const healthBar = this.getHealthBarHtml()

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
    const totalAttackScore = attackScoreArray.reduce((total, curDiceScore) => total + curDiceScore)
    this.health -= totalAttackScore
    if(this.health <= 0) {
      this.dead = true
      this.health = 0
    }
  }

  this.getHealthBarHtml = () => {
    const percent = getPercentage(this.health, this.maxHealth)
    console.log(percent)
  }
}

const getPercentage = (remainingHealth, maximunHealth) => (100 * remainingHealth) / maximunHealth

export default Character