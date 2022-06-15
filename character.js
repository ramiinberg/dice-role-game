import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from "./utils.js"

class Character {
  constructor(data) {
    Object.assign(this, data)
    this.maxHealth = this.health
    this.diceHtml = getDicePlaceholderHtml(this.diceCount)
  }

  setDiceHtml() {
    console.log('wtf')
    this.currentDiceScore = getDiceRollArray(this.diceCount)
    this.diceHtml = this.currentDiceScore.map(num =>
      `<div class="dice">${num}</div>`).join('')
  }

  takeDamage(attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce((total, curDiceScore) => total + curDiceScore)
    this.health -= totalAttackScore
    if(this.health <= 0) {
      this.dead = true
      this.health = 0
    }
  }

  getCharacterHtml() {
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

  getHealthBarHtml() {
    const percent = getPercentage(this.health, this.maxHealth)
    const danger = percent <= 25 ? 'danger' : ''
    return `<div class="health-bar-outer">
      <div class="health-bar-inner ${danger}" 
        style="width: ${percent}%;">
      </div>
    </div>`
  }
}

export default Character