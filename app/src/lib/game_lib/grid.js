import { DEFAULT_CARD } from './card';

class GridItem {
    constructor() {
        this.card = DEFAULT_CARD;
        this.occupied = false;
    }

    setItem(card) {
        if (!this.occupied) {
            this.card = card;
            this.occupied = true;
        }
    }
}

function initializeGrid() {
    let grid = [[], [], [], [], []];

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

    return grid;
}

export { GridItem, initializeGrid };
