let current_UserName = ["GM", "KK", "KA", "GU", "UK"];
let new_User = ["HT", "GM", "gu", "NU", "DU", "KK"];
for (let i = 0; i < new_User.length; i++) {
    if (current_UserName.indexOf(new_User[i]) == -1) {
        console.log("username is available");
    }
    else {
        console.log("enter new username");
    }
}
export {};
// for( const val of new_User){
//     if(current_UserName.indexOf(val) == -1){
//         console.log("username is available");
//     }else{
//         console.log("enter a new username");
//     }
// }
//# sourceMappingURL=32.js.map