import { cardsData } from "../card.js";

let startTime = null;
let timer = null;

export const startTimer = () => {
  startTime = new Date();
  timer = setInterval(() => {
    const currentTime = new Date();
    const timeElapsed = currentTime - startTime;
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timer);
  const endTime = new Date();
  const timeElapsed = endTime - startTime;
  return timeElapsed;
};

const sendTimeToServer = (timeElapsed) => {
  const token = localStorage.getItem('token');
  fetch('/game-time', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ time: timeElapsed })
  }).then(response => {
    if (response.ok) {
      console.log('Time sent to server successfully');
    } else {
      console.error('Failed to send time to server');
    }
  }).catch(err => {
    console.error('Error sending time to server:', err);
  });
};

export const checkGameStatus = () => {
  const CardsCount = cardsData.length;
  const allCards = document.querySelectorAll('.memory-card');
  const flippedCards = Array.from(allCards).filter(card => card.classList.contains('flip'));

  const GameStatus = (CardsCount === flippedCards.length);

  if (GameStatus) {
    const timeElapsed = stopTimer();
    sendTimeToServer(timeElapsed);
    window.alert('You win!\nResult can check in your profile')
    return {
      'status': true,
      'custom': `You win a game!, your new record is ${timeElapsed}`
    }
  }
};