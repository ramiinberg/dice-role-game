import characterData from "./data.js"
import Character from "./character.js"

function render() {
  const wizard = new Character(characterData.hero)
  document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()

  const orc = new Character(characterData.monster)
  document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()
}

render()
