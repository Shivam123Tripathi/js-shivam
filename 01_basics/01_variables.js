const accountId = 144533
let accountEmail = "xyz@google.com"
var accountPassword = "12345"
accountcity = "Indore"
let accountState;

// if in js you declare variable but dont assign any value it will return undefined
// account = 2 this is not allowed accountId can be only one and unchanged
console.log(accountId);

/*
prefer not to use var because of issue
in functional scope and block scope {}
*/

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountcity = "Bengaluru"
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountcity])
