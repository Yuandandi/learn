// {{{ if, else if, else
const d = new Date(10, 30, 2022, 6, 0, 0)
const hour = d.getHours();

// console.log(hour); // 8

if (hour < 12) { // if the first condition is met didn't execute the next condition
    console.log("Good Morning");
} else if (hour < 18) {
    console.log("Good Afternoon")
} else { // no need to specify because Its the rest
    console.log("Good Night");
};
// }}}

// {{{ Nested If

if (hour < 12) {
    console.log("Good Morning");
    if (hour === 6) { // nested if
        console.log("Wake up");
    };
} else if (hour < 18) {
    console.log("Good Afternoon")
} else {
    console.log("Good Night");
    if (hour >= 20) {
        console.log("zzzzz");
    };
};

if (hour >= 7 && hour < 15) {
    console.log("It is work time");
};

if (hour === 6 || hour === 20) {
    console.log("Brush your teeth");
};

//  }}};
