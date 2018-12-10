//Problem 1
var h = [2,4,6,8,10];
for (var i = 0; i < h.length; i++) {
    console.log(i);
    console.log(h[i]);
}
/*Answer
0
2
1
4
2
6
3
8
4
10
*/

//Problem 2
var j = [2,4,6,8,10];
for (var k = j.length; k > 0; k--) {
    console.log(k);
    console.log(j[k]);
}
/*Answer
5
undefined
4
10
3
8
2
6
1
4
*/

//Problem 3
var m = [2,4,6,8,10];
for (var n = 0; n < m.length; n += 2) {
    console.log(n);
    console.log(m[n]);
}
/*Answer
0
2
2
6
4
10
*/

//Problem 4
var p = [-1,0,5,-3,2];
for (var q = 0; q < p.length; q++) {
    if (p[q] < 0) {
        p[q] = "Dojo";
    }
}
console.log(p);
/*Answer
["Dojo", 0, 5, "Dojo", 2]
*/

//Problem 5
var r = [-1,0,5,-3,2];
for (var s = 0; s < r.length; s++) {
    if (r[s] > 0) {
        r[s] = r[s] * r[s];
    }
}
console.log(r);
/*Answer
[-1, 0, 25, -3, 4]
*/

//Problem 6
var t = [];
for (var u = 0; u < 4; u++) {
    t.push(u);
}
console.log(t);
/*Answer
[0, 1, 2, 3]
*/

//Problem 7
var v = [1,2,3,4,5];
for (var w = 0; w < v.length; w++) {
    v.pop();
}
console.log(v);
/*Answer
[1,2]
*/