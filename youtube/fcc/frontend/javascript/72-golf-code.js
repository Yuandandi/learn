// GOLF CODE
// each hole has a par ; the average number of strokes you're supposed to use to
// get the ball into the hole, depending on How far above or below par your
// strokes are, there's a different nickname

var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Doutble Bogey", "Go!"]

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}

console.log(golfScore(5, 4)); // 4 == 5 -1 ; Birdie
