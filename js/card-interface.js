var Card = require('./../js/card.js').cardModule;
var Deck = require('./../js/deck.js').deckModule;

$(document).ready(function() {
  var pictures = ['cat', 'dog', 'bird', 'fish', 'dinosaur', 'mouse'];
  var cards = [];
  pictures.forEach(function(picture) {
    var card1 = new Card(picture);
    var card2 = new Card(picture);
    cards.push(card1);
    cards.push(card2);
  });

  var deck = new Deck(cards);
  deck.shuffle();

  var col = 0;
  deck.cards.forEach(function(card) {
    $('.col' + col).append('<div class="card ' + card.picture +'"><img src="img/' + card.picture + '.jpg"></div>');
    $('.col' + col + ' div').last().click(function() {
      if (!$(this).hasClass('matched')) {
        result = deck.chooseCard(card);
        $(this).find('img').show();
        $(this).addClass('flipped');
        $('.message').text(result);
        if (result == "Not a Match.") {
          setTimeout(function() {
            $(".flipped img").hide();
            $(".flipped").removeClass('flipped');
          }, 1000);
        } else if (result == "Matched!") {
          $(".flipped").addClass('matched')
          $(".flipped").removeClass('flipped');
          if (deck.victory()) {
            result = "You Win!";
            $(".replay .btn").show();
          }
        }
        $('.message').text(result);
      }
    });
    col++;
    if (col == 3) {
      col = 0;
    }
  });
});
