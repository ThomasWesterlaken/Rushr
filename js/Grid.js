class Grid {

    constructor(size) {
        if(size === undefined) size = 5; // Fallback
        this.grid = this.createGrid(size);
    }

    createGrid(size) {
        const grid = [];
        for (let i = 0; i < size; i++) {
            grid.push([]);
            for (let j = 0; j < size; j++) {
                grid[i].push(new Tile());
            }
        }
        return grid;
    }

    fillGrid() {
        let gridEl = document.getElementById('grid');
        let width = gridEl.offsetWidth;
        let height = gridEl.offsetHeight;
        let size = this.grid.length;

        let tileWidth = width / size;
        let tileHeight = height / size;

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let tile = new Tile(tileWidth, tileHeight, i, j);
                this.grid[i][j] = tile;
                gridEl.appendChild(tile);
            }
        }

    }
}