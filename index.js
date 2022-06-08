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
    endGame(wizard, orc)
  }

  render()
}

function endGame(wizard, orc) {
  const endMessage = wizard.dead ? "The Orc is Victorious" : orc.dead ? `The 
  Wizard Wins` : `No victors - all creatures are dead`

  console.log(endMessage)
}
