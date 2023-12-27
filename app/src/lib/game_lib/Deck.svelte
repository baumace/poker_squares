<script>
    import { onMount } from "svelte";
    import { Card, SUITS, RANKS, DEFAULT_CARD } from "./card.js";
    import { activeCard } from "./store.js";

    let deck = [];

    function generateDeck() {
        deck = [];
        Object.values(SUITS).forEach((suit) => {
            Object.values(RANKS).forEach((rank) => {
                deck.push(new Card(suit, rank));
            });
        });
    }

    function shuffleDeck() {
        let loopCounter = deck.length * 4;
        while (loopCounter-- > 0) {
            let card1 = Math.floor(Math.random() * deck.length);
            let card2 = Math.floor(Math.random() * deck.length);
            deck[card2] = [deck[card1], (deck[card1] = deck[card2])][0];
        }
    }

    /**
     * Prepares deck for poker squares by selecting the 25 front cards.
     */
    function prepareDeck() {
        const numberOfCards = 25;
        generateDeck();
        shuffleDeck();
        deck = deck.slice(0, numberOfCards);
    }

    onMount(prepareDeck);

    let isClicked = false;
    /**
     * Deal is only possible when active card is empty and there are cards in
     * the deck.
     * @type {boolean}
     */
    $: disableDeal = $activeCard !== DEFAULT_CARD || deck.length === 0;

    function handleDeal() {
        activeCard.set(deck.pop());
    }

    function handleActiveCardSelection() {
        isClicked = !isClicked;
    }
</script>

<div>
    <div>
        <button
            class="card_item"
            id="undealt"
            on:click={handleDeal}
            disabled={disableDeal}
        >
            {#if deck.length > 0}
                <img src="/images/card_placeholder.svg" alt="card back" />
            {/if}
        </button>
    </div>
    <div>
        <button
            class="card_item"
            id={isClicked ? "selected" : "unselected"}
            on:click={handleActiveCardSelection}
        >
            {#if $activeCard !== DEFAULT_CARD}
                <img
                    src={$activeCard.getImageSource()}
                    alt={$activeCard.toString()}
                />
            {/if}
        </button>
    </div>
</div>

<style>
    img {
        outline: none;
    }
    #undealt {
        margin-bottom: 2rem;
    }
    #selected {
        margin-top: 2rem;
        outline: 5px solid yellow;
    }
    #unselected {
        margin-top: 2rem;
    }
</style>
