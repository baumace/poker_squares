<script>
    import { GridItem } from './grid.js';
    import { activeCard } from './store.js';
    import { DEFAULT_CARD } from './card.js';

    let grid = [
        [],
        [],
        [],
        [],
        []
    ];

    const numRowsColumns = 5; 
    let row = 0;
    while (row < numRowsColumns) {
        let column = 0;
        while (column < numRowsColumns) {
            grid[row][column] = new GridItem();
            column++;
        }
        row++;
    }

    let rowScores = [0, 0, 0, 0, 0];
    let columnScores = [0, 0, 0, 0, 0];

    function scoreRow(row) {
    }

    function scoreColumn() {
    }

    function handleClick(item, row, column) {
        if ($activeCard !== DEFAULT_CARD) {
            item.setItem($activeCard);
            grid = grid;
            activeCard.set(DEFAULT_CARD);
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
            <div class = "score">
                { rowScores[r] }
            </div>
        </span>
    {/each}
    <span>
        {#each columnScores as score}
            <div class = "score">
                { score }
            </div>
        {/each}
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
