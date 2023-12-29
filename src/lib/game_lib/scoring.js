import { RANKS, HANDS, Card } from './card';

/**
 * Checks if cards are of the same suit.
 * @param {Card[]} cards
 * @return {boolean} are all cards of the same suit?
 */
function sameSuits(cards) {
    let previousSuit = null;
    return cards.reduce((result, card) => {
        if (result && previousSuit !== null) {
            result = card.suit === previousSuit;
            previousSuit = card.suit;
        } else if (previousSuit === null) {
            previousSuit = card.suit;
        }
        return result;
    }, true);
}

/**
 * Comparator to sort cards in descending order by rank. If there is a tie then
 * greater card is chosen by suit (somewhat arbitrary).
 * @param {Card} cardA
 * @param {Card} cardB
 * @returns {number} result of comparison
 */
function byRank(cardA, cardB) {
    const diff = cardB.rank - cardA.rank;
    return diff !== 0 ? diff : cardB.suit - cardA.suit;
}

/**
 * Checks if cards are a straight according to their rank (does not account
 * for suit).
 * @param {Card[]} cards
 * @returns {boolean} card ranks are a straight?
 */
function straight(cards) {
    if (cards.length === 0) return false;

    const leadingAce = cards.length > 0 && cards[0].rank === RANKS.ACE;
    if (leadingAce) {
        const ace = cards.shift();
        const restOfHandStraight = straight(cards);
        cards.unshift(ace);
        if (restOfHandStraight) {
            const highAceStraight = cards[cards.length - 1].rank === RANKS.TEN;
            if (highAceStraight) return true;

            const lowAceStraight = cards[cards.length - 1].rank === RANKS.TWO;
            if (lowAceStraight) return true;
        }
        return false;
    } else {
        let previousRank = null;
        return cards.reduce((result, card) => {
            if (result && previousRank !== null) {
                result = card.rank - previousRank === -1;
                previousRank = card.rank;
            } else if (previousRank === null) {
                previousRank = card.rank;
            }
            return result;
        }, true);
    }
}

/**
 * Counts the occurrences of ranks in a group of cards.
 * @param {Card[]} cards
 * @returns {Object | Object.<number, number>} object with the count for each
 * rank. occurences = {rank: count}
 */
function countRankOccurrences(cards) {
    let occurrences = {};
    cards.forEach((card) => {
        occurrences[card.rank] = occurrences[card.rank]
            ? occurrences[card.rank] + 1
            : 1;
    });
    return occurrences;
}

/**
 * Maximum occurrence of a rank (X of a kind).
 * @param {Object | Object.<number, number>} occurrences
 * @returns {number} maximum count
 */
function countKind(occurrences) {
    let maxKinds = 0;
    Object.values(occurrences).forEach((count) => {
        if (count > maxKinds) maxKinds = count;
    });
    return maxKinds;
}

/**
 * Counts number of pairs among the cards (rank occurrences >= 2).
 * @param {Object | Object.<number, number>} occurrences
 * @returns {number} number of pairs
 */
function countPairs(occurrences) {
    let numPairs = 0;
    Object.values(occurrences).forEach((count) => {
        if (count >= 2) numPairs++;
    });
    return numPairs;
}

/**
 * Scores a given hand of cards.
 * @param {Card[]} hand
 * @returns {number} the resulting score of the hand
 */
function scoreHand(hand) {
    hand = hand.sort(byRank);
    const fullHand = hand.length === 5;
    const sameSuit = sameSuits(hand);
    const straightHand = straight(hand);
    const occurrences = countRankOccurrences(hand);
    const numKind = countKind(occurrences);
    const numPairs = countPairs(occurrences);

    const royalFlush = fullHand && sameSuit && hand[4].rank === RANKS.TEN;
    if (royalFlush) return HANDS.ROYAL_FLUSH;

    const straightFlush = fullHand && sameSuit && straightHand;
    if (straightFlush) return HANDS.STRAIGHT_FLUSH;

    const fourOfAKind = numKind === 4;
    if (fourOfAKind) return HANDS.FOUR_KIND;

    const threeOfAKind = numKind === 3;
    // two pairs, one extra pair besides three of a kind
    const twoPairs = numPairs === 2;
    const fullHouse = threeOfAKind && twoPairs;
    if (fullHouse) return HANDS.FULL_HOUSE;

    const flush = fullHand && sameSuit;
    if (flush) return HANDS.FLUSH;

    const exclusiveStraight = fullHand && straightHand;
    if (exclusiveStraight) return HANDS.STRAIGHT;

    if (threeOfAKind) return HANDS.THREE_KIND;

    if (twoPairs) return HANDS.TWO_PAIRS;

    const onePair = numPairs === 1;
    if (onePair) return HANDS.PAIR;

    return HANDS.NONE;
}

export {
    scoreHand,
    sameSuits,
    byRank,
    straight,
    countRankOccurrences,
    countKind,
    countPairs,
};
