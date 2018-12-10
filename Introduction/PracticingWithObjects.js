//Problem 1
function printVal(obj, keyName) {
    console.log(obj[keyName]);
}
var wand1 = {"wood": "cherry", "core": "phoenix feather", "length": 11.5};
printVal(wand1, "core");
var wand2 = {"wood": "chestnut", "core": "dragon heartstring", "length": 10};
printVal(wand2, "length");
/*Answer
phoenix feather
10
*/

//Problem 2
function updateVal(obj, keyName, val) {
    obj[keyName] = val;
    return obj;
}
var dish = {"desc": "fries", "price": 2.99, "size": "L"};
dish = updateVal(dish, "desc", "waffle fries");
dish = updateVal(dish, "price", 2.59);
console.log(dish);
/*Answer
{desc: "waffle fries", price: 2.59, size: "L"}
*/

//Problem 3
function zip(arr1, arr2) {
    var newObj = {};
    for (var i = 0; i < arr1.length; i++) {
        var key = arr1[i];
        var val = arr2[i];
        newObj[key] = val;
    }
    return newObj;
}
var p = zip(["founder", "name", "year"], ["Brandon Eich", "JavaScript", 1995]);
console.log(p);
/*Answer
{"founder":"Brandon Eich", "name":"Javascript", "year":1995}
*/