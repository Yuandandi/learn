let d;

d = new Date(); // 2024-07-08T14:02:47.737Z

d = d.toString(); // Mon Jul 08 2024 14:04:38 GMT+0000 (Coordinated Universal Time)

d = new Date(2021, 7, 4, 12, 30, 0);  // 2021-08-04T12:30:00.000Z

d = new Date("2021-07-10T12:30:03"); // 2021-07-10T12:30:03.000Z

d = new Date("7/10/2021 12:30:03") // 2021-07-10T12:30:03.000Z

d = new Date("2022-07-10"); // 2022-07-10T00:00:00.000Z ; It might be off by a day if your time zone is not set
// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

d = new Date("07-10-2022"); // 2022-07-10T00:00:00.000Z ; US format month date year

d = Date.now(); // 1720448038994 ; current time in millisecond

// set date and get that time;
d = new Date("07-10/2022 12:30:00");
d = d.getTime(); // 1657456200000
d = d.valueOf(); // 1657456200000 ; same thing

d = new Date(1657456200000); // 2022-07-10T12:30:00.000Z

d = Math.floor(Date.now() / 1000); // 1720448346 ; current time in seconds

console.log(d);
