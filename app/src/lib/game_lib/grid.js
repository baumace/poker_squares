class GridItem {
    constructor() {
        this.card = null;
        this.occupied = false;
    }

    setItem(card) {
        if (!this.occupied) {
            this.card = card;
            this.occupied = true;
        }
    }
};

export { GridItem };
