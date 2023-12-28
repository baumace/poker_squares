import {
    scoreHand,
    sameSuits,
    byRank,
    straight,
    countRankOccurrences,
    countKind,
    countPairs,
} from '/src/lib/game_lib/scoring.js';
import { Card, SUITS, RANKS, HANDS } from '/src/lib/game_lib/card.js';
import { describe, expect, test } from 'vitest';

const aceHearts = new Card(SUITS.HEARTS, RANKS.ACE);
const kingHearts = new Card(SUITS.HEARTS, RANKS.KING);
const queenHearts = new Card(SUITS.HEARTS, RANKS.QUEEN);
const jackHearts = new Card(SUITS.HEARTS, RANKS.JACK);
const tenHearts = new Card(SUITS.HEARTS, RANKS.TEN);
const sixHearts = new Card(SUITS.HEARTS, RANKS.SIX);
const fiveHearts = new Card(SUITS.HEARTS, RANKS.FIVE);
const fourHearts = new Card(SUITS.HEARTS, RANKS.FOUR);
const threeHearts = new Card(SUITS.HEARTS, RANKS.THREE);
const twoHearts = new Card(SUITS.HEARTS, RANKS.TWO);

const aceSpades = new Card(SUITS.SPADES, RANKS.ACE);
const fourSpades = new Card(SUITS.SPADES, RANKS.FOUR);
const twoSpades = new Card(SUITS.SPADES, RANKS.TWO);

const twoDiamonds = new Card(SUITS.DIAMONDS, RANKS.TWO);

const twoClubs = new Card(SUITS.CLUBS, RANKS.TWO);

describe('sameSuits', () => {
    test('identifies full hand of same suits', () => {
        // Arrange
        const hand = [
            aceHearts,
            threeHearts,
            queenHearts,
            tenHearts,
            sixHearts,
        ];
        const expected = true;

        // Act
        const actual = sameSuits(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('identifies full hand of different suits', () => {
        // Arrange
        const hand = [aceHearts, fourSpades, queenHearts, tenHearts, sixHearts];
        const expected = false;

        // Act
        const actual = sameSuits(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('identifies partial hand of same suits', () => {
        // Arrange
        const hand = [queenHearts, tenHearts, sixHearts];
        const expected = true;

        // Act
        const actual = sameSuits(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('identifies partial hand of different suits', () => {
        // Arrange
        const hand = [fourSpades, tenHearts, sixHearts];
        const expected = false;

        // Act
        const actual = sameSuits(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('identifies hand of one suit', () => {
        // Arrange
        const hand = [fourSpades];
        const expected = true;

        // Act
        const actual = sameSuits(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('identifies hand of zero suits', () => {
        // Arrange
        const hand = [];
        const expected = true;

        // Act
        const actual = sameSuits(hand);

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('byRank', () => {
    test('sorts in descending order', () => {
        // Arrange
        let hand = [aceHearts, threeHearts, queenHearts, tenHearts, sixHearts];
        const expectedHand = [
            aceHearts,
            queenHearts,
            tenHearts,
            sixHearts,
            threeHearts,
        ];

        // Act
        hand = hand.sort(byRank);

        // Assert
        expect(hand).toEqual(expectedHand);
    });

    test('sorts single card hand', () => {
        // Arrange
        let hand = [aceHearts];
        const expectedHand = [aceHearts];

        // Act
        hand = hand.sort(byRank);

        // Assert
        expect(hand).toEqual(expectedHand);
    });

    test('sorts empty hand', () => {
        // Arrange
        let hand = [];
        const expectedHand = [];

        // Act
        hand = hand.sort(byRank);

        // Assert
        expect(hand).toEqual(expectedHand);
    });
});

describe('straight', () => {
    test('identify a same suit straight', () => {
        // Arrange
        const hand = [
            sixHearts,
            fiveHearts,
            fourHearts,
            threeHearts,
            twoHearts,
        ].sort(byRank);
        const expected = true;

        // Act
        const actual = straight(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('identify a different suit straight', () => {
        // Arrange
        const hand = [
            sixHearts,
            fiveHearts,
            fourSpades,
            threeHearts,
            twoSpades,
        ].sort(byRank);
        const expected = true;

        // Act
        const actual = straight(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('identify a non-straight', () => {
        // Arrange
        const hand = [
            sixHearts,
            queenHearts,
            fourSpades,
            threeHearts,
            twoSpades,
        ].sort(byRank);
        const expected = false;

        // Act
        const actual = straight(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('identify a same suit low ace straight', () => {
        // Arrange
        const hand = [
            aceHearts,
            fiveHearts,
            fourHearts,
            threeHearts,
            twoHearts,
        ].sort(byRank);
        const expected = true;

        // Act
        const actual = straight(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('identify a same suit high ace straight', () => {
        // Arrange
        const hand = [
            aceHearts,
            kingHearts,
            queenHearts,
            jackHearts,
            tenHearts,
        ].sort(byRank);
        const expected = true;

        // Act
        const actual = straight(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('identify a different suit low ace straight', () => {
        // Arrange
        const hand = [
            aceHearts,
            fiveHearts,
            fourSpades,
            threeHearts,
            twoSpades,
        ].sort(byRank);
        const expected = true;

        // Act
        const actual = straight(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('identify a different suit high ace straight', () => {
        // Arrange
        const hand = [
            aceSpades,
            kingHearts,
            queenHearts,
            jackHearts,
            tenHearts,
        ].sort(byRank);
        const expected = true;

        // Act
        const actual = straight(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('identify an ace non-straight', () => {
        // Arrange
        const hand = [
            aceSpades,
            fiveHearts,
            twoHearts,
            fourSpades,
            kingHearts,
        ].sort(byRank);
        const expected = false;

        // Act
        const actual = straight(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('identify empty hand', () => {
        // Arrange
        const hand = [].sort(byRank);
        const expected = false;

        // Act
        const actual = straight(hand);

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('countRankOccurrences', () => {
    test('counts multiple occurrences', () => {
        // Arrange
        const hand = [
            aceSpades,
            fourSpades,
            fourHearts,
            twoSpades,
            twoHearts,
        ].sort(byRank);
        let expected = {};
        expected[RANKS.ACE] = 1;
        expected[RANKS.FOUR] = 2;
        expected[RANKS.TWO] = 2;

        // Act
        const actual = countRankOccurrences(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('counts zero occurrences', () => {
        // Arrange
        const hand = [].sort(byRank);
        let expected = {};

        // Act
        const actual = countRankOccurrences(hand);

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('countKind', () => {
    test('returns largest occurrence', () => {
        // Arrange
        let occurrences = {};
        occurrences[RANKS.FOUR] = 2;
        occurrences[RANKS.TWO] = 3;
        const expected = 3;

        // Act
        const actual = countKind(occurrences);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('handles ties', () => {
        // Arrange
        let occurrences = {};
        occurrences[RANKS.FOUR] = 2;
        occurrences[RANKS.TWO] = 2;
        const expected = 2;

        // Act
        const actual = countKind(occurrences);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('returns with 0 occurrences', () => {
        // Arrange
        let occurrences = {};
        const expected = 0;

        // Act
        const actual = countKind(occurrences);

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('countPairs', () => {
    test('counts multiple pairs', () => {
        // Arrange
        let occurrences = {};
        occurrences[RANKS.FOUR] = 2;
        occurrences[RANKS.TWO] = 3;
        const expected = 2;

        // Act
        const actual = countPairs(occurrences);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('counts one pair', () => {
        // Arrange
        let occurrences = {};
        occurrences[RANKS.FOUR] = 2;
        occurrences[RANKS.TWO] = 1;
        const expected = 1;

        // Act
        const actual = countPairs(occurrences);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('identifies zero pairs', () => {
        // Arrange
        let occurrences = {};
        occurrences[RANKS.FOUR] = 1;
        occurrences[RANKS.TWO] = 1;
        const expected = 0;

        // Act
        const actual = countPairs(occurrences);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('functions with empty occurrences', () => {
        // Arrange
        let occurrences = {};
        const expected = 0;

        // Act
        const actual = countPairs(occurrences);

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('scoreHand', () => {
    test('royal flush', () => {
        // Arrange
        const hand = [
            aceHearts,
            kingHearts,
            queenHearts,
            jackHearts,
            tenHearts,
        ].sort(byRank);
        const expected = HANDS.ROYAL_FLUSH;

        // Act
        const actual = scoreHand(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('straight flush', () => {
        // Arrange
        const hand = [
            sixHearts,
            fiveHearts,
            fourHearts,
            threeHearts,
            twoHearts,
        ].sort(byRank);
        const expected = HANDS.STRAIGHT_FLUSH;

        // Act
        const actual = scoreHand(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('four of a kind', () => {
        // Arrange
        const hand = [
            twoClubs,
            twoDiamonds,
            fourHearts,
            twoSpades,
            twoHearts,
        ].sort(byRank);
        const expected = HANDS.FOUR_KIND;

        // Act
        const actual = scoreHand(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('full house', () => {
        // Arrange
        const hand = [
            aceHearts,
            twoDiamonds,
            aceSpades,
            twoSpades,
            twoHearts,
        ].sort(byRank);
        const expected = HANDS.FULL_HOUSE;

        // Act
        const actual = scoreHand(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('flush', () => {
        // Arrange
        const hand = [
            aceHearts,
            sixHearts,
            jackHearts,
            threeHearts,
            twoHearts,
        ].sort(byRank);
        const expected = HANDS.FLUSH;

        // Act
        const actual = scoreHand(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('straight', () => {
        // Arrange
        const hand = [
            aceHearts,
            fiveHearts,
            fourSpades,
            threeHearts,
            twoSpades,
        ].sort(byRank);
        const expected = HANDS.STRAIGHT;

        // Act
        const actual = scoreHand(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('three of a kind', () => {
        // Arrange
        const hand = [
            twoClubs,
            tenHearts,
            fourHearts,
            twoSpades,
            twoHearts,
        ].sort(byRank);
        const expected = HANDS.THREE_KIND;

        // Act
        const actual = scoreHand(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('two pairs', () => {
        // Arrange
        const hand = [
            twoClubs,
            twoHearts,
            aceSpades,
            aceHearts,
            tenHearts,
        ].sort(byRank);
        const expected = HANDS.TWO_PAIRS;

        // Act
        const actual = scoreHand(hand);

        // Assert
        expect(actual).toEqual(expected);
    });

    test('one pairs', () => {
        // Arrange
        const hand = [
            twoClubs,
            twoHearts,
            aceSpades,
            fourHearts,
            tenHearts,
        ].sort(byRank);
        const expected = HANDS.PAIR;

        // Act
        const actual = scoreHand(hand);

        // Assert
        expect(actual).toEqual(expected);
    });
});
