import { createCards } from "./utils/game.create_cards.js";
import { flipCard } from "./utils/flip.js";
import { checkGameStatus } from "./utils/game.status.check.js";

createCards()

const allCards = document.querySelectorAll('.memory-card');

allCards.forEach(card => card.addEventListener('click', flipCard));

window.onload = () => {
  setInterval(() => {
    checkGameStatus()
  }, 2000);
}