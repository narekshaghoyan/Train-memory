import { checkForMatch } from "./checker.js";

let firstCard, secondCard;

export function flipCard() {
  if (firstCard && secondCard) return;

  this.classList.toggle('flip');
  this.removeEventListener('click', flipCard);

  if (!firstCard) {
    firstCard = this;
  } else {
    secondCard = this;

    setTimeout(() => {
      const resultGame = checkForMatch(firstCard, secondCard);

      if (!resultGame) {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        firstCard.addEventListener('click', flipCard);
        secondCard.addEventListener('click', flipCard);
      }

      firstCard = null;
      secondCard = null;
    }, 1000);
  }
}