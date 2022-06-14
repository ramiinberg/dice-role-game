function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1)
}

function getDicePlaceholderHtml(diceCount) {
  return new Array(diceCount).fill(0).map(() => `<div class="placeholder-dice"></div>`).join('')
}

const getPercentage = (remainingHealth, maximunHealth) => (100 * remainingHealth) / maximunHealth

export { getDiceRollArray, getDicePlaceholderHtml, getPercentage }