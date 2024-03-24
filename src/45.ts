function carFunc(manufacturer: string, modelName: string , ...arbitaryval:[string ,any][])  {
  let car : any = {
    manufacturer: manufacturer,
    modelName: modelName,
  };
  arbitaryval.forEach(([key, value]) => {
    car[key] = value;
});

return car


}
let carObj = carFunc("toyota" , "gli"  ,["color", "blue"], ["year", 2022])  
console.log(carObj);
