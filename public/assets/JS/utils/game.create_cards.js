import { cardsData } from "../card.js";
import { shuffled } from "./random.js";

let memoryGame = document.getElementById('memory-game');

export const createCards = () => {
  for (let card of shuffled(cardsData)) {
    const cardObj = document.createElement(
      'div'
    )
    const cardObjImage = document.createElement(
      'img'
    )
    cardObj.setAttribute('data-framework', card.data_framework)
    cardObj.classList = 'memory-card'
    cardObj.id = `card_${card.id}`

    cardObjImage.src = card.imageF
    cardObjImage.alt = 'Reload page'
    cardObjImage.className = 'front-face'

    cardObj.append(
      cardObjImage
    )

    memoryGame.append(
      cardObj
    )
  }
}

