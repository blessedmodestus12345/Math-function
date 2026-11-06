        //SUM FUNCTION
// function calculateSum(num1, num2){
//     return num1 + num2;
// }
// console.log(calculateSum(2,5))
// console.log(calculateSum(10,10))
// console.log(calculateSum(5,5))

            //SUBTRACT FUNCTION
// function calculateDifference(num1, num2){
//     return num1 - num2;
// }
// console.log(calculateDifference(22, 5))
// console.log(calculateDifference(12, 1))
// console.log(calculateDifference(17, 9))

            //MULTIPLY FUNCTION
// function calculateProduct(num1, num2){
//     return num1 * num2;
// }
// console.log(calculateProduct(13,5))

           //DIVISION FUNCTION
// function calculateQuotient(num1, num2){
//     if(num2 == 0){
//         return "Error: Division by zero";
//     }else{
//          return num1 / num2;
//     }
   

// }
// console.log(calculateQuotient(7,11))
// console.log(calculateQuotient(3,0))
// function calculateSquare(num){
//     return Math.pow(5,2);
// }
// console.log(calculateSquare())

        //BOOLEAN CHECKER
let myEmailAddr = "BlessedChidex@yahoo.com";
function maskEmail(inputEmail){
let cleanEmail = inputEmail.trim()
let [username, domain] = cleanEmail.split("@");
let maskUsername = username[0] + "^^^^^^^^&&&&&" + username[username.length - 1];
return maskUsername + "@" + domain
}
let maskedResult = maskEmail(myEmailAddr);
console.log(maskedResult)
