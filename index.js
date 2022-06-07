import characterData from "./data.js"
import Character from "./character.js"

document.getElementById("attack-button").addEventListener("click", attack)

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

render()



function render() {
  document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
  document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

function attack() {
  wizard.getDiceHtml()
  orc.getDiceHtml()

  wizard.takeDamage(orc.currentDiceScore)
  orc.takeDamage(wizard.currentDiceScore)
  if(orc.dead || wizard.dead) {
    endGame()
  }

  render()
}

function endGame() {
  console.log("the game is over")
}
