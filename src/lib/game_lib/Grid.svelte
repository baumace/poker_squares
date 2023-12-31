<script>
    import { initializeGrid, GridItem } from "./grid.js";
    import { scoreHand } from "./scoring.js";
    import { activeCard } from "./store.js";
    import { DEFAULT_CARD } from "./card.js";

    let grid = initializeGrid();

    let rowScores = [0, 0, 0, 0, 0];
    let columnScores = [0, 0, 0, 0, 0];

    /**
     * Calculates and stores the score of a row.
     * @param {number} row - the row being scored
     */
    function scoreRow(row) {
        const hand = grid[row]
            .filter((item) => item.occupied)
            .map((item) => item.card);
        rowScores[row] = scoreHand(hand);
    }

    /**
     * Calculates and store the score of a column.
     * @param {number} column - the column being scored
     */
    function scoreColumn(column) {
        let hand = [];
        grid.forEach((row) => {
            if (row[column].occupied) {
                hand.push(row[column].card);
            }
        });
        columnScores[column] = scoreHand(hand);
    }

    /**
     * Handles scoring and store updates resulting from a click.
     * @param {GridItem} item - item clicked
     * @param {number} row - row containing the item
     * @param {number} column - column containing the item
     */
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

<div class="grid_container">
    {#each grid as row, r}
        <span class="card_row">
            {#each row as gridItem, c}
                {#if gridItem.occupied}
                    <div class="card_item">
                        <img
                            src={gridItem.card.getImageSource()}
                            alt={gridItem.card.toString()}
                        />
                    </div>
                {:else}
                    <button
                        class="card_item"
                        disabled={gridItem.occupied}
                        on:click={() => handleClick(gridItem, r, c)}
                    >
                    </button>
                {/if}
            {/each}
            <div class="card_item" id="row_item">
                <div id="row_score">
                    {rowScores[r]}
                </div>
            </div>
        </span>
    {/each}
    <span>
        {#each columnScores as score}
            <div class="card_item" id="column_item">
                <div id="column_score">
                    {score}
                </div>
            </div>
        {/each}
        <div class="card_item" id="total_item">
            <div id="total_score">
                {rowScores
                    .concat(columnScores)
                    .reduce((sum, score) => sum + score, 0)}
            </div>
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
    #row_item {
        outline: none;
        border: none;
        color: cyan;
        width: 1%;
    }
    #row_score {
        text-align: left;
        margin: none;
        padding: none;
        position: absolute;
        top: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    #column_item {
        outline: none;
        border: none;
        color: cyan;
        height: 1%;
    }
    #column_score {
        position: absolute;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    #total_item {
        outline: none;
        border: none;
        color: lime;
        height: 1%;
        width: 1%;
    }
    #total_score {
        position: absolute;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
</style>
