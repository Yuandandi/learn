// CLASS KEYWORD

// CONSTRUCTOR FUNCTION;
// var SpaceShuttle = function(targetPlanet) {
//   this.targetPlanet = targetPlanet;
// }

// var zeus = new SpaceShuttle('Jupiter'); // older way to create an object with 'new' keyword
// console.log(zeus.targetPlanet);

// the "new" operator let developers create an instance of a user-defined object type or of one of the built in object types that has a constructor Function

// USING CLAS SYNTAX;

class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
};
var zeus = new SpaceShuttle("Jupiter");
console.log(zeus.targetPlanet);
