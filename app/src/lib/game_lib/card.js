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
        return `/public/images/${this.suit}_${this.rank}.svg`;
    }
}

const SUITS = Object.freeze({
    HEARTS: 'H',
    DIAMONDS: 'D',
    SPADES: 'S',
    CLUBS: 'C'
});

const RANKS = Object.freeze({
    ACE: 'A',
    KING: 'K',
    QUEEN: 'Q',
    JACK: 'J',
    TEN: 'T',
    NINE: '9',
    EIGHT: '8',
    SEVEN: '7',
    SIX: '6',
    FIVE: '5',
    FOUR: '4',
    THREE: '3',
    TWO: '2' 
});

export { Card, SUITS, RANKS };
