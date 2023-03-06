class Product {

    constructor(name, volume, destination) {
        this.type = BOXTYPE.CARBOARD_SMALL;
        this.volume = SIZE.SMALL;
        this.destination = destination;
    }
}

const SIZE = {
    SMALL : {value: 0, name: "Small", code: "S"},
    MEDIUM: {value: 1, name: "Medium", code: "M"},
    LARGE : {value: 2, name: "Large", code: "L"}
}

const BOXTYPE = {
    CARBOARD_SMALL : {},
    CARBOARD_BIG : {},
    PLASTIC : {}
}