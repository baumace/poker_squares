<script>
    import { Card, SUITS, RANKS } from './Card.js'

    $: deck = [];

    function shuffleDeck() {
        let loopCounter = deck.length*4;
        while (loopCounter-- > 0) {
            let card1 = Math.floor(Math.random() * deck.length);
            let card2 = Math.floor(Math.random() * deck.length);
            deck[card2] = [deck[card1], deck[card1] = deck[card2]][0];
        }
    }
    

    function generateDeck() {
        deck = [];
        Object.values(SUITS).forEach((suit) => {
            Object.values(RANKS).forEach((rank) => {
                deck.push(new Card(suit, rank));
            });
        });
    }

    generateDeck();
    shuffleDeck();
</script>

<div>
    <div class = "card_item">
        Undealt
    </div>
    <div class = "card_item">
        Dealt
    </div>
</div>

<style>
    div {
        background: green;
    }
</style>
