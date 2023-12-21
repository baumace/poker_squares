<script>
    import { GridItem } from './Grid.js'

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
    console.log(grid);
</script>

<div class = "grid_container">
    {#each grid as row, i}
        <span class = "card_row">
            {#each grid[i] as item}
                <div class = "card_item">
                    { i }
                </div>
            {/each}
        </span>
    {/each}
</div>

<style>
    .grid_container {
        margin-left: 5%;
        background: blue;
    }

    .card_row {
        display: flex;
    }
</style>
