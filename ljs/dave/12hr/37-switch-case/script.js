// {{{ Variable

const d = new Date(2022, 4, 10, 11, 0, 0)
const month = d.getMonth();
const hour = d.getHours();

//  }}}
// If the Case Is Fix Number;{{{
switch(month) {
    case 1:
        console.log("It is January");
        break;
    case 2:
        console.log("It is February");
        break;
    case 3:
        console.log("It is March");
        break;
    default:
        console.log("It is not Jan, Feb or March");
};
// }}}
// If the Case Is Ranges;{{{
switch (true) {
    case hour < 12:
        console.log("Good Morning");
        break;
    case hour < 18:
        console.log("Good Afternoon");
        break;
    default:
        console.log("Good Night")
};// }}}
// {{{ When We Use Switch?

// if you will use more than 5 else if it's good case to use switch case statement;

//  }}};
