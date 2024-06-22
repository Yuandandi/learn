"use strict";
const chicka = {
    dbId: 22,
    name: "chicka",
    email: "chicka@foo.com",
    userId: 200,
    startTrail: () => {
        return "Trail started";
    },
    getCoupon: (couponname, age) => {
        if (couponname === "jaka" && age === 20) {
            return 20;
        }
        return null;
    }
};
const coupon = chicka.getCoupon("jaka", 20);
console.log(coupon);
console.log(chicka.startTrail());
