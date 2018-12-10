//Problem 1
var a = 2;
while (a < 16) {   
    console.log(a);
    a = a * 2;
}
/*Answer
2
4
8
*/

//Problem 2
var b = 2;
while (b < 30) {   
    if (b > 10) {
        b = b + 6;
    }
    b += 3;
}
console.log(b);
/*Answer
38
*/

//Problem 3
var c = 50;
while (c > 0) {   
    if (c > 47) {
        c--;
    }
    else {
        c -= 20;
    }
}
console.log(c);
/*Answer
-13
*/

//Problem 4
for (var d = 1; d < 8; d += 2) {   
    console.log(d);
}
/*Answer
1
3
5
7
*/

//Problem 5
for (var e = 10; e < 1000; e *= 10) {   
    console.log(e);
}
/*Answer
10
100
*/

//Problem 6
for(var f = 0; f < 5; f++) {
    f = f + 1;  
    console.log(f);
}
/*Answer
1
3
5
*/

//Problem 7
for (var g = 200; g >= 0; g -= 10) {   
    if (g == 200) {
        g = g / 20;
    }
}
console.log(g);
/*Answer

*/