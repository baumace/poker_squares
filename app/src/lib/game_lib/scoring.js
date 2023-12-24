import { RANKS, HANDS } from "./card";

function sameSuits(cards) {
    let previousSuit = null;
    return cards.reduce((result = true, card) => {
        if (result) {
            result = card.suit === previousSuit; 
            previousSuit = card.suit;
        }
        return result;
    });
}

function byRank(cardA, cardB) {
    const diff = cardB.rank - cardA.rank;
    return diff !== 0 ? diff : cardB.suit - cardA.suit;
}

function straight(cards) {
    const leadingAce = cards[0] === RANKS.ACE;
    if (leadingAce) {
        const ace = cards.shift();
        const remainderIsStraight = straight(cards);
        cards.unshift(ace);
        return false;
    } else {
        let previousRank = null;
        return cards.reduce((result = true, card) => {
            if (result) {
                result = card.rank - previousRank === -1; 
                previousRank = card.suit;
            }
            return result;
        });
    }
}

function countOccurrences(cards) {
    let occurrences = {};
    cards.forEach((card) => {
        occurrences[card.rank] = occurrences[card.rank] ? occurrences[card.rank] + 1 : 1;
    });
    return occurrences;
}

function countKind(occurrences) {
    let maxKinds = 0;
    Object.values(occurrences).forEach((count) => {
        if (count > maxKinds) maxKinds = count;
    });
    return maxKinds;
}

function countPairs(occurrences) {
    let numPairs = 0;
    Object.values(occurrences).forEach((count) => {
        if (count > 2) numPairs++;
    });
    return numPairs;
}

function scoreHand(hand) {
    hand = hand.sort(byRank);
    const fullHand = hand.length === 5;
    const sameSuit = sameSuits(hand);
    const straightHand = straight(hand);
    const occurrences = countOccurrences(hand);
    const numKind = countKind(occurrences);
    const numPairs = countPairs(occurrences);

    const royalFlush = fullHand && sameSuit && hand[4] === RANKS.TEN;
    if (royalFlush) return HANDS.ROYAL_FLUSH;

    const straightFlush = fullHand && sameSuit && straightHand;
    if (straightFlush) return HANDS.STRAIGHT_FLUSH;

    const fourOfAKind = numKind === 4;
    if (fourOfAKind) return HANDS.FOUR_KIND;

    const threeOfAKind = numKind === 3;
    const onePair = numPairs === 1;
    const fullHouse = threeOfAKind && onePair;
    if (fullHouse) return HANDS.FULL_HOUSE;

    const flush = fullHand && sameSuit;
    if (flush) return HANDS.FLUSH;

    const exclusiveStraight = fullHand && straightHand;
    if (exclusiveStraight) return HANDS.STRAIGHT;

    if (threeOfAKind) return HANDS.THREE_KIND;

    const twoPairs = numPairs === 2;
    if (twoPairs) return HANDS.TWO_PAIRS;
    
    if (onePair) return HANDS.PAIR;

    return 0;
}

export { scoreHand, sameSuits, byRank, straight, countOccurrences, countKind, countPairs };
