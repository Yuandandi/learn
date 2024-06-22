"use strict";
const chicka = {
    dbId: 22,
    name: "chicka",
    email: "chicka@foo.com",
    userId: 200,
    startTrail: () => {
        return "Trail started";
    },
    getCoupon: (namaKupon, age) => {
        if (namaKupon === "jaka" && age === 20) {
            return 20;
        }
        return null;
    },
    gitToken: "ksdjfksdfe8834"
};
const coupon = chicka.getCoupon("jaka", 20);
console.log(coupon);
console.log(chicka.startTrail());
