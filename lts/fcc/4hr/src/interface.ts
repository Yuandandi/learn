// INTERFACE{{{
interface Pelanggan {
    readonly dbId: number,
    name: string,
    email: string,
    userId: number,
    // startTrail: () => string // methods that returns a string
    startTrail(): string, // better to write this wary
    getCoupon(couponname: string, age: number): number | null
}//}}}

// interface has the ability to expand the type of declared type, while "type" doesn't
// people called It reopening of the interface;
interface Pelanggan {
    gitToken: string
}

interface Administrator extends Pelanggan { // "extends" get all the types properties from "Pelanggan"
    role: "admin" | "ta" | "learner"
}

const chicka: Pelanggan = {
    dbId: 22,
    name: "chicka",
    email: "chicka@foo.com",
    userId: 200,
    startTrail: () =>  { 
        return "Trail started" // if return a number It will err
    },
    getCoupon: (namaKupon, age)=> { // compulsary parameters
        if (namaKupon === "jaka" && age === 20) {
            return 20;
        }
        return null;
    },
    gitToken: "ksdjfksdfe8834"
};

const coupon = chicka.getCoupon("jaka", 20)//{{{
console.log(coupon);
console.log( chicka.startTrail() )//}}}
