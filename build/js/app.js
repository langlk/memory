(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Card(picture) {
  this.picture = picture;
}

exports.cardModule = Card;

},{}],2:[function(require,module,exports){
function Deck(cards) {
  this.cards = cards;
  this.chosen = [];
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
    } else {
      result = "Not a Match."
    }
    this.chosen = [];
  }
  return result;
};

exports.deckModule = Deck;

},{}],3:[function(require,module,exports){
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

},{"./../js/card.js":1,"./../js/deck.js":2}]},{},[3]);
