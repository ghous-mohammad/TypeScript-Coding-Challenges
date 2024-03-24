let name = "ghous muhammad";
let upper_Case = name.toUpperCase();
let lower_Case = name.toLowerCase();
let arr = name.split(" ");
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
let title_Case = arr.join(" ");
console.log(`Your Name In Tittle Case ${title_Case}\n`);
console.log(`YOUR NAME IN UPPER CASE ${upper_Case}\n`);
console.log(`your name in lower case ${lower_Case}\n`);
export {};
//# sourceMappingURL=03.js.map