export const shuffled = (
  cardsData
) => {
  return cardsData.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}
