// enums ; list of related constant

const enum Size { Small = 1, Medium = 2, Large = 3};
// enum Size { Small = 1, Medium = 2, Large = 3};

let mySize: Size = Size.Medium;
console.log(mySize);


// output without const;
//"use strict";
//var Size;
//(function (Size) {
//    Size[Size["Small"] = 1] = "Small";
//    Size[Size["Medium"] = 2] = "Medium";
//    Size[Size["Large"] = 3] = "Large";
//})(Size || (Size = {}));
//;
//let mySize = Size.Medium;
//console.log(mySize);
////# sourceMappingURL=enums.js.map

// output with const; compiler will generate more optimize code
//"use strict";
//;
//let mySize = 2;
//console.log(mySize);
////# sourceMappingURL=enums.js.map
