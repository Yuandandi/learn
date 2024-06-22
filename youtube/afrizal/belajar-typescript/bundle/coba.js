"use strict";
// INTERFACE
// declare intelCoreI5 what they have with the rules IProcessor is given type;
const intelCoreI5 = {
    brand: "Intel",
    baseModel: "Core i5",
    modelName: "i5-11350f",
    clockSpeed: 4,
    turboBoost: false
};
const amdRyzen3 = {
    brand: "AMD",
    baseModel: "Ryzen 3",
    modelName: "r-5570x",
    clockSpeed: 6,
    precisionBoost: true
};
// with parameter of an object "processor" of type IProcessor give us access to each brand data;
function deskripsi(processor) {
    console.log(`
        A big thanks to ${processor.brand}, you guys have been successful in making a valuable product with such detail.
        Base model name: ${processor.baseModel}
        Model name: ${processor.modelName}
        Clock speed: ${processor.clockSpeed} GHz
        Turbo boost enabled? ${processor.turboBoost ? 'Yes' : 'No'}
        Precision boost enabled? ${processor.precisionBoost ? 'Yes' : 'No'}
    `);
}
function createIntel(processor) {
    deskripsi(processor);
}
function createAMD(processor) {
    deskripsi(processor);
}
// Calling the functions with the respective processors
createIntel(intelCoreI5);
createAMD(amdRyzen3);
