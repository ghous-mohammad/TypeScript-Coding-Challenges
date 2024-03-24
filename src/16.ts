import { invitedPeople } from "./14.js";

// let i: number = 0;

// while (i < invitedPeople.length) {
//   if (invitedPeople[i].toLowerCase() === "nomi") {
//     invitedPeople[i] = invitedPeople[i].replace("nomi", "raza");
//   }
//   console.log(
//     `i would like to invite you on my sister's marriage ${invitedPeople[i]}`
//   );

//   i++;
// }
console.log("i have found a bigger dinner tale");
//let invitedPeople: string[] = ["ali", "imran", "yawar", "abdullah"];
invitedPeople.unshift("kashif khan");
let arrLength = invitedPeople.length;
arrLength = arrLength / 2;

invitedPeople.splice(arrLength, 0, "ghaniya");
invitedPeople.push("kamran");
export let morepeople = invitedPeople
console.log(invitedPeople);
