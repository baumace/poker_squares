<script>
    import { initializeGrid } from './grid.js';
    import { scoreHand } from './scoring.js';
    import { activeCard } from './store.js';
    import { DEFAULT_CARD } from './card.js';


    let grid = initializeGrid();

    let rowScores = [0, 0, 0, 0, 0];
    let columnScores = [0, 0, 0, 0, 0];

    function scoreRow(row) {
        const hand = grid[row].filter((item) => item.occupied).map((item) => item.card);
        rowScores[row] = scoreHand(hand);
    }

    function scoreColumn(column) {
        let hand = [];
        grid.forEach(row => {
            if (row[column].occupied) {
                hand.push(row[column].card);
            }
        });
        columnScores[column] = scoreHand(hand);
    }

    function handleClick(item, row, column) {
        if ($activeCard !== DEFAULT_CARD) {
            item.setItem($activeCard);
            scoreRow(row);
            scoreColumn(column);
            activeCard.set(DEFAULT_CARD);
            grid = grid;
        }
    }
</script>

<div class = "grid_container">
    {#each grid as row, r}
        <span class = "card_row">
            {#each row as gridItem, c}
                <button class = "card_item" disabled = { gridItem.occupied } on:click = { () => handleClick(gridItem, r, c) }>
                    {#if gridItem.occupied }
                        <img src = "{gridItem.card.getImageSource()}" alt = "{gridItem.card.toString()}"/>
                    {/if}
                </button>
            {/each}
            <div class = "card_item">
                { rowScores[r] }
            </div>
        </span>
    {/each}
    <span>
        {#each columnScores as score}
            <div class = "card_item">
                { score }
            </div>
        {/each}
        <div class = "card_item">
            { rowScores.concat(columnScores).reduce((sum, score) => sum + score, 0) }
        </div>
    </span>
</div>

<style>
    span {
        display: flex;
    }
    .grid_container {
        margin-left: 5%;
    }
    .card_row {
        display: flex;
    }
    img {
        outline: none;
    }
</style>
