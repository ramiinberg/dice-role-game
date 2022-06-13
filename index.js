import characterData from "./data.js"
import Character from "./character.js"

let monsterArray = ["orc", "demon", "goblin"]

const getNewMonster = () => {
  const nextMonsterData = characterData[monsterArray.shift()]
  return nextMonsterData ? new Character(nextMonsterData) : {}
}

function attack() {
  wizard.getDiceHtml()
  monster.getDiceHtml()

  wizard.takeDamage(monster.currentDiceScore)
  monster.takeDamage(wizard.currentDiceScore)

  if(monster.dead) {
    if(monsterArray.length) {
      setTimeout(function () {
        monster = getNewMonster()
        render()
      }, 1000)
    }
    else {
      endGame()
    }
  }
  else if(wizard.dead) {
    endGame()
  }

  render()
}

function endGame() {
  const endMessage = wizard.dead ? "The Monsters is Victorious" : monster.dead ? `The Wizard Wins` : `No victors - all creatures are dead`
  const endEmoji = !wizard.dead ? "🔮" : "☠️"

  setTimeout(() => {
    document.body.innerHTML = `<div class="end-game">
          <h2>Game Over</h2>
          <h3>${endMessage}</h3>
          <p class="end-emoji">${endEmoji}</p>
      </div>` 
  }, 1500)


}

function render() {
  document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
  document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

document.getElementById("attack-button").addEventListener("click", attack)
const wizard = new Character(characterData.hero)
let monster = getNewMonster()

render()

