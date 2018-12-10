//Problem 1
var num = 15;
if (num >= 10) {
    console.log("the number is bigger than 10");
}
/*Answer
"The number is bigger than 10"
*/

//Problem 2
var name = "Bruce";
if (name != "Bruce") {
    console.log("What's your name?");
} 
else {
    console.log("Hello, Bruce!");
}
/*Answer
"Hello Bruce!"
*/

//Problem 3
var num1 = 10;
var num2 = 15;
if (num1 <= num2) {
    num1 = num1 + 10;
}
console.log(num1);
console.log(num2);
/*Answer
20
15
*/

//Problem 4
var num1 = 20;
var num2 = 5;

if (num1 < num2) {
    num2 = num2 * num1;
}
else {
    num1 = num1 / num2;
}

if (num1 < num2) {
    num1 = num1 * 2;
}
else if (num1 == num2) {
    num2 = num1 * num2;
}
else {
    num2 = num2 * 2;
}

console.log(num1);
console.log(num2);
/*Answer
8
5
*/
