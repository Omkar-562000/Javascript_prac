const accountId = 144553
let accountEmail = "mohan21@gmail.com"
var accountPassword = "12345"
accountStates = "Maharashtra"
let accountState;

// accountId = 2 // not allowed

accountEmail = "roani12@gmail.com"
accountPassword = "21212121"
accountStates = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountStates, accountState])