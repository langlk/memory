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
    $('.col' + col).append('<div class="card ' + card.picture +'">Card</div>');
    $('.col' + col + ' div').last().click(function() {
      if (!$(this).hasClass('matched')) {
        result = deck.chooseCard(card);
        $(this).text(card.picture);
        $(this).addClass('flipped');
        $('.message').text(result);
        if (result == "Not a Match.") {
          setTimeout(function() {
            $(".flipped").text('Card');
            $(".flipped").removeClass('flipped');
          }, 1000);
        } else if (result == "Matched!") {
          $(".flipped").addClass('matched')
          $(".flipped").removeClass('flipped');
        }
        $('.message').text(result);
      }
    });
    col++;
    if (col == 3) {
      col = 0;
    }
  });

  // $('.card').click(function() {
  //   $(this).text($(this).attr('class').split(" ")[1]);
  //   $(this).addClass('flipped');
  //   var flipped = $('.flipped')
  //   if (flipped.length == 2) {
  //     flipped.forEach(function(card) {
  //       if card.attr('class').includes($(this).)
  //     });
  //   }
  // });
});
