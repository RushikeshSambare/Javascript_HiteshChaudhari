//there are three type of varibale const, var and let
const accountId = 1212973;
let accountEmail = " rushi@gmail.com";
var accontpasword = "123123";
accountCity = "jaipur";
let accontState;
console.table([accontpasword, accountEmail, accountId, accountCity, accontState]);
//try to change value of varible
//accountId = 21212; //we can not change the value of const varible
accountEmail = "rushipatil@gmail.com";
accontpasword = "12341234";

// console.log(typeof(accountCity));

console.log("after changed the value of accountPassword and accountEmail")
console.table([accontpasword, accountEmail, accountId, accountCity, accontState]);