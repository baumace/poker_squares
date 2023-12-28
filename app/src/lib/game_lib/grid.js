import { DEFAULT_CARD, Card } from './card';

/**
 * Item on the grid with card and state of occupation.
 * @class
 * @constructor
 * @public
 */
class GridItem {
    constructor() {
        /**
         * Card in the grid spot
         * @type {Card}
         * @public
         */
        this.card = DEFAULT_CARD;
        /**
         * Is the grid spot occupied?
         * @type {boolean}
         * @public
         */
        this.occupied = false;
    }

    /**
     * Set the grid item to the card iff the spot is unoccupied.
     * @param {Card} card
     */
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
