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
    turboBoost?: boolean;
    precisionBoost?: boolean;
}

// extends allow us to absorb the IProcessor type property;
interface Intel extends IProcessor {
    turboBoost: boolean;
}

interface AMD extends IProcessor {
    precisionBoost: boolean;
}

// declare intelCoreI5 what they have with the rules IProcessor is given type;
const intelCoreI5: Intel = {
    brand: "Intel",
    baseModel: "Core i5",
    modelName: "i5-11350f",
    clockSpeed: 4,
    turboBoost: false
}

const amdRyzen3: AMD = {
    brand: "AMD",
    baseModel: "Ryzen 3",
    modelName: "r-5570x",
    clockSpeed: 6,
    precisionBoost: true
}

// with parameter of an object "processor" of type IProcessor give us access to each brand data;
function deskripsi(processor: IProcessor): void {
    console.log(`
        A big thanks to ${processor.brand}, you guys have been successful in making a valuable product with such detail.
        Base model name: ${processor.baseModel}
        Model name: ${processor.modelName}
        Clock speed: ${processor.clockSpeed} GHz
        Turbo boost enabled? ${processor.turboBoost ? 'Yes' : 'No'}
        Precision boost enabled? ${processor.precisionBoost ? 'Yes' : 'No'}
    `);
}

function createIntel(processor: Intel): void {
    deskripsi(processor);
}

function createAMD(processor: AMD): void {
    deskripsi(processor);
}

// Calling the functions with the respective processors
createIntel(intelCoreI5);
createAMD(amdRyzen3);

