import { invitedPeople } from "./14.js";

//let invitedPeople: string[] = ["ali", "imran", "yawar", "abdullah"];

console.log("nomi");

let i: number = 0;

while (i < invitedPeople.length) {
  if (invitedPeople[i].toLowerCase() === "nomi") {
    invitedPeople[i] = invitedPeople[i].replace("nomi", "raza");
  }
  console.log(
    `i would like to invite you on my sister's marriage ${invitedPeople[i]}`
  );

  i++;
}
