// DATA CUSTOM TYPE

type temanType = { // type of temanType that holds an array of an object like this
    nama: string;
    isKampret: boolean;
    hutang: number; // so this is the must data type you have to given
};

let temanKita: temanType; // temanKita has data type of temanType

temanKita= {
    nama: "ilham",
    isKampret: true,
    // hutang: 10_000, // if we delete one of the type It will complain "missing"
    hutang: 10_000,
};

console.log({ temanKita });

