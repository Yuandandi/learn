// // {{{ if else

// let number = parseInt(prompt("put your number")); 
// // everything you put in prompt will become a string e.g. 1 will become "1"
// // parseInt() ; JavaScript method to convert string onto number

// if (number === 1) { // === is type aware so you need to make sure the input is also a number
//   alert("you put number 1")
// } else if (number === 2) {
//   alert("you put number 2")
// } else if (number === 3) {
//   alert("you put number 3")
// } else {
//   alert("you put the wrong number")
// }

// // }}}
// // {{{ switch case break

// let number = parseInt(prompt("pick a number 1 2 3")); // turn onto number

// switch (number) {
//   case 1: // case should be a number only can't hold expression
//     alert("you put number 1");
//     break;
//   case 2:
//     alert("you put number 2");
//     break;
//   case 3:
//     alert("you put number 3");
//     break;
//   default:
//     alert("you put the wrong number");
//     break;
// }

// }}}
// {{{ improve the switch case with remove the break

let item = prompt("pick one of these item: \n (nasi, ayam, telur, coca-cola, mie)");


switch(item) {
  case "nasi": // if use pick nasi go to next line, next line and met alert for good food then break out the block
  case "ayam":
  case "telur":
    alert("you pick a healthy food")
    break;
  case "coca-cola":
  case "mie":
    alert("you pick a bad food")
    break;
  default :
    alert("you pick on none of the list")
    break;
};

// }}}
