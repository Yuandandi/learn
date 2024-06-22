interface Point {
    x: number;
    y: number;
}

function printCoord(pt: Point) {
    console.log(`x coordinate: ${pt.x}`);
    console.log(`y coordinate: ${pt.y}`);
};

printCoord({ x:100, y:200 });
