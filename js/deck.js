function Deck(cards) {
  this.cards = cards;
  this.chosen = [];
  this.matched = 0;
}

Deck.prototype.shuffle = function () {
  for (i = this.cards.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = temp;
  }
};

Deck.prototype.chooseCard = function(card) {
  this.chosen.push(card);
  var result = "Pick a second card.";
  if (this.chosen.length == 2) {
    if (this.chosen[0].picture == this.chosen[1].picture) {
      result = "Matched!";
      this.matched += 2;
      console.log(this.matched);
    } else {
      result = "Not a Match."
    }
    this.chosen = [];
  }
  return result;
};

Deck.prototype.victory = function() {
  return this.cards.length === this.matched;
}

exports.deckModule = Deck;
