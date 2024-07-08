// {{{ Date Methods
// let x;

// let d = new Date();  // 1720448674988

// x = d.toString();  // Mon Jul 08 2024 14:24:49 GMT+0000 (Coordinated Universal Time)

// x = d.getTime();  // 1720448691429
// x = d.valueOf();  // 1720448691429

// x = d.getFullYear(); // 2024
// x = d.getMonth() + 1; // 6 + 1;  0 based means 7th month which July
// x = d.getHours(); // 14
// x = d.getMinutes(); // 22
// x = d.getSeconds(); // 15

// // year-month-date
// x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}` // 2024-7-8

// console.log(x);// }}}
// API INTL datetime format;{{{
// powerful way to format does in a locale sensitive way (different place has their own to interpret the time);

let d = new Date();  // 1720448674988
t = Intl.DateTimeFormat("en-US").format(d); // 7/8/2024 ; month/date/year
t = Intl.DateTimeFormat("en-GB").format(d); // 08/07/2024 ; date/month/year
t = Intl.DateTimeFormat("default").format(d); // 7/8/2024

t = Intl.DateTimeFormat("default", { month: "long" }).format(d); // July
t = Intl.DateTimeFormat("default", { month: "short" }).format(d); // Jul

t = d.toLocaleString("default"); // 7/8/2024, 4:13:16 PM
t = d.toLocaleString("default", {month: 'short'}); // Jul}}}
// format recommendation{{{

t = d.toLocaleString("default", { // Monday, July 8, 2024 at 12:16:49 PM
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "America/New_York",
})// }}}

console.log(t);
