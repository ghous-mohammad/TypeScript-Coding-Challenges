function carFunc(manufacturer, modelName, ...arbitaryval) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    arbitaryval.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
let carObj = carFunc("toyota", "gli", ["color", "blue"], ["year", 2022]);
console.log(carObj);
export {};
//# sourceMappingURL=45.js.map