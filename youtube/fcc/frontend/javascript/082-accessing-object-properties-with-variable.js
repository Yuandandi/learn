// bracket notation can also be used to lookup object properties Using variables

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

var playerNumber = 16;
var player = testObj[playerNumber];
// It find the global variable first than applied to the local properties (the order must be right)

console.log(player);
