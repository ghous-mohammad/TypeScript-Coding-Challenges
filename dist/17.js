import { morepeople } from "./16.js";
// invitedPeople.unshift("kashif khan");
// let arrLength = invitedPeople.length;
// arrLength = arrLength / 2;
// invitedPeople.splice(arrLength, 0, "ghaniya");
// invitedPeople.push("kamran");
// console.log(invitedPeople);
console.log(`i can invite only two people for dinner.`);
//let morepeople: string[] = ["ali", "imran", "yawar", "abdullah"];
do {
    if (morepeople.length > 2) {
        let name = morepeople.pop();
        console.log(`sorry ${name} i can’t invite you to dinner`);
    }
} while (morepeople.length > 2);
console.log(`you are invited ${morepeople[0]}, \nyou are invited ${morepeople[1]}`);
//# sourceMappingURL=17.js.map