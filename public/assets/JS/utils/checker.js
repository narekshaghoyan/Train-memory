export const checkForMatch = (
  firstCard,
  secondCard
) => {
  if (!firstCard && !secondCard) throw new Error('No info for first and second card!')

  const resultGame = (firstCard.getAttribute('data-framework') == secondCard.getAttribute('data-framework')) ? true : false

  return resultGame
}