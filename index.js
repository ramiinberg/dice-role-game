import characterData from "./data.js"
import Character from "./character.js"

function render() {
  const wizard = new Character(characterData.hero)
  document.getElementById('hero').innerHTML = wizard.getCharacterHtml()

  const orc = new Character(characterData.monster)
  document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

render()
