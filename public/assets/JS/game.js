import { createCards } from "./utils/game.create_cards.js";
import { flipCard } from "./utils/flip.js";
import { checkGameStatus, startTimer } from "./utils/game.status.check.js";

createCards()

const allCards = document.querySelectorAll('.memory-card');

allCards.forEach(card => card.addEventListener('click', flipCard));

window.onload = () => {
  startTimer()
  
  const GameChecker = setInterval(() => {
    const result = checkGameStatus()

    if (!result || result == undefined) return

    if (result.status) {
      clearInterval(GameChecker)
    } else {
      console.log(result.status);
    }
  }, 2000);
}