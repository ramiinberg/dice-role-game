import characterData from "./data.js"
import Character from "./character.js"

document.getElementById("attack-button").addEventListener("click", attack)

const wizard = new Character(characterData.hero)

let monsterArray = ["orc", "demon", "goblin"]
const orc = new Character(characterData.monster)

render()

const getNewMonster = () => {
  const nextMonsterData =characterData[monsterArray.shift()]
}

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
  const endMessage = wizard.dead ? "The Orc is Victorious" : orc.dead ? `The Wizard Wins` : `No victors - all creatures are dead`
  const endEmoji = !wizard.dead ? "🔮" : "☠️"

  document.body.innerHTML = `<div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>` 

}
