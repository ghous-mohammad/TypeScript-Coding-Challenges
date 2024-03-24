let user_Name = ["Ghous Muhammad", "Ali", "Admin", "Kahsif", "Durfishan Umer"];
for (let i = 0; i < user_Name.length; i++) {
    console.log(user_Name[i] + " greetings!");
    if (user_Name[i].toLowerCase() == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user_Name[i]} , thank you for logging in again.`);
    }
}
export {};
//# sourceMappingURL=30.js.map