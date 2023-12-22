class Card {
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
        return `/images/${this.suit}_${this.rank}.svg`;
    }

    toString() {
        return `${this.rank}_${this.suit}`;
    }
}

const SUITS = Object.freeze({
    HEARTS: 'hearts',
    DIAMONDS: 'diamonds',
    SPADES: 'spades',
    CLUBS: 'clubs'
});

const RANKS = Object.freeze({
    ACE: 'ace',
    KING: 'king',
    QUEEN: 'queen',
    JACK: 'jack',
    TEN: '10',
    NINE: '9',
    EIGHT: '8',
    SEVEN: '7',
    SIX: '6',
    FIVE: '5',
    FOUR: '4',
    THREE: '3',
    TWO: '2' 
});

const DEFAULT_CARD = new Card(0, 0);

export { Card, SUITS, RANKS, DEFAULT_CARD };
