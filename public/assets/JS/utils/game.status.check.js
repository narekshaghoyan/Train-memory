import { cardsData } from "../card.js";

export const checkGameStatus = () => {
  const CardsCount = cardsData.length
  const allCards = document.querySelectorAll('.memory-card');
  
  const flippedCards = Array.from(allCards).filter(card => card.classList.contains('flip'));
  
  const GameStatus = (CardsCount === flippedCards.length) ? true : false

  console.log(GameStatus);
};
