//{{{ what's crazy with typesript within enum
// ENUM
// restrict the users choice;

// this is bad code
// const AISLE = 0;
// const MIDDLEL = 1;
// const WINDOW = 2;

// enum SeatChoice { // if you didn't specify const It will create a massive code of js
const enum SeatChoice {
    // AISLE, // the default value is 0, but you can change the evaluate number so the next number is 11 so on and on
    AISLE = "AISLE",
        MIDLE = 19,
        WINDOW, // 20
    FOURTH, // 21
}

// SeatChoice is an object so you can't wrapt with ({});
// console.log( typeof SeatChoice )
// better to store to variable fist ;
const yourSeat = SeatChoice.AISLE;
