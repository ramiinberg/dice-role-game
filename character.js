import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from "./utils.js"

function Character(data) {
  Object.assign(this, data)

  this.maxHealth = this.health

  this.setDiceHtml = function() {
    this.currentDiceScore = getDiceRollArray(this.diceCount)
    this.diceArray = this.currentDiceScore.map(num =>
      `<div class="dice">${num}</div>`).join('')
  }
  
  
  this.diceHtml = getDicePlaceholderHtml(this.diceCount)
  
  this.takeDamage = function(attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce((total, curDiceScore) => total + curDiceScore)
    this.health -= totalAttackScore
    if(this.health <= 0) {
      this.dead = true
      this.health = 0
    }
  }

  this.getCharacterHtml = function() {
    const { name, avatar, health, diceHtml } = this
    const healthBar = this.getHealthBarHtml()
    return `<div class="character-card">
              <h4 class="name"> ${name} </h4>
              <img class="avatar" src="${avatar}"/>
              <p class="health">health: <b> ${health} </b></p>
              ${healthBar}
              <div class="dice-container">
                ${diceHtml}
              </div>
            </div>
    `
  }

  this.getHealthBarHtml = () => {
    const percent = getPercentage(this.health, this.maxHealth)
    const danger = percent <= 25 ? 'danger' : ''
    console.log(percent)
    return `<div class="health-bar-outer">
      <div class="health-bar-inner ${danger}" 
        style="width: ${percent}%;">
      </div>
    </div>`
  }
}

export default Character