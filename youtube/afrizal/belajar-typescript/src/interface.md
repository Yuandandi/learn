// INTERFACE

// interface giving a mockup of what a processor should be;
interface IProcessor {
    brand: string;
    baseModel: string;
    modelName: string;
    clockSpeed: number;
}

// the advantage of using interface rather than type is you can add a new item anywhere with the same name without losing the previous type declaration;
interface IProcessor {
    turboBoost: boolean;
}

// extends allow us to absorp the IProcessor type property;
interface Intel extends IProcessor {
    turboBoost: boolean;
}

interface AMD extends IProcessor {
    precisionBoost: boolean;
}

// declare intelCoreI5 What They have with the rules IProcessor is given type;
const intelCoreI5 = {
    brand: "intel",
    baseModel: "core i5",
    modelName: "i5-11350f",
    clockSpeed: 4,
    turboBoost: false
}

const AmdRyzen3 = {
    brand: "AMD",
    baseModel: "ryzen 3",
    modelName: "r-5570x",
    clockSpeed: 6,
    precisionBoost: true
}

// with parameter of an object "processor" of type IProcessor give us an access to each brand data;
function deskripsi(processor: IProcessor): void {
    console.log(`
                a big thanks for ${processor.brand}, you guys have been successes to make a valuable product with such detail
                basemodel name: ${processor.baseModel}
                nmodel name: ${processor.modelName}
                clock speed of ${processor.clockSpeed}
                turbo boost enable? ${processor.precisionBoost}
                `);
};

function createIntel(processor: Intel): void {
}

function createAMD(processor: AMD): void {
}

// deskripsi(intelCoreI5);

createIntel(intelCoreI5);
createAMD(AmdRyzen3);
