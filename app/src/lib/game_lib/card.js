/**
 * Card representation with suit and rank.
 * @class
 * @constructor
 * @public
 */
class Card {
    /**
     * @param {Suit} suit
     * @param {Rank} rank
     */
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }

    getSuit() {
        return this.suit;
    }

    getRank() {
        return this.rank;
    }

    getImageSource() {
        return `/images/${convertSuitToString(this.suit)}/${convertRankToString(
            this.rank,
        )}.svg`;
    }

    toString() {
        return `${convertSuitToString(this.suit)}_${convertRankToString(
            this.rank,
        )}`;
    }
}

/**
 * @typedef {number} Suit
 * @enum {Suit}
 */
const SUITS = Object.freeze({
    HEARTS: 0,
    DIAMONDS: 1,
    SPADES: 2,
    CLUBS: 3,
});

/**
 * @typedef {number} Rank
 * @enum {Rank}
 */
const RANKS = Object.freeze({
    ACE: 12,
    KING: 11,
    QUEEN: 10,
    JACK: 9,
    TEN: 8,
    NINE: 7,
    EIGHT: 6,
    SEVEN: 5,
    SIX: 4,
    FIVE: 3,
    FOUR: 2,
    THREE: 1,
    TWO: 0,
});

/**
 * @param {Suit} suit
 */
function convertSuitToString(suit) {
    switch (suit) {
        case SUITS.HEARTS:
            return 'hearts';
        case SUITS.DIAMONDS:
            return 'diamonds';
        case SUITS.SPADES:
            return 'spades';
        case SUITS.CLUBS:
            return 'clubs';
    }
}

/**
 * @param {Rank} rank
 */
function convertRankToString(rank) {
    switch (rank) {
        case RANKS.ACE:
            return 'ace';
        case RANKS.KING:
            return 'king';
        case RANKS.QUEEN:
            return 'queen';
        case RANKS.JACK:
            return 'jack';
        case RANKS.TEN:
            return 'ten';
        case RANKS.NINE:
            return 'nine';
        case RANKS.EIGHT:
            return 'eight';
        case RANKS.SEVEN:
            return 'seven';
        case RANKS.SIX:
            return 'six';
        case RANKS.FIVE:
            return 'five';
        case RANKS.FOUR:
            return 'four';
        case RANKS.THREE:
            return 'three';
        case RANKS.TWO:
            return 'two';
    }
}

const DEFAULT_CARD = new Card(-1, -1);

/**
 * @typedef {number} Hand
 * @enum {Hand}
 */
const HANDS = Object.freeze({
    ROYAL_FLUSH: 100,
    STRAIGHT_FLUSH: 75,
    FOUR_KIND: 50,
    FULL_HOUSE: 25,
    FLUSH: 20,
    STRAIGHT: 15,
    THREE_KIND: 10,
    TWO_PAIRS: 5,
    PAIR: 2,
    NONE: 0,
});

export { Card, SUITS, RANKS, DEFAULT_CARD, HANDS };
