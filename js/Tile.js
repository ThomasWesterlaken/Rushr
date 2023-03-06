class Tile {

    constructor(tileWidth, tileHeight, i, j) {
        let tile = document.createElement('div');
        tile.classList.add('tile');
        tile.style.width = tileWidth + 'px';
        tile.style.height = tileHeight + 'px';
        tile.style.top = tileHeight * i + 'px';
        tile.style.left = tileWidth * j + 'px';
        tile.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
        tile.style.position = 'absolute';
        tile.style.margin = '0';
        return tile;
    }
}