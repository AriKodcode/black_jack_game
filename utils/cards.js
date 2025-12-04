export function createCards() {
  let cards_list = [];
  let card_numbers = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];
  let card_suite = ['D', 'C', 'D', 'S'];
  for (let i = 0; i < card_numbers.length; i++) {
    for (let j = 0; j < card_suite.length; j++) {
      let new_card = {
        rank: card_numbers[i],
        suite: card_suite[j],
      };
      cards_list.push(new_card);
    }
  }
  return cards_list;
}
console.log(createCards().length);
