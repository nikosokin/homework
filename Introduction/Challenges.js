//Challenge 1
function printUpTo(x) {
    z=1
    if(x>0){
        while(z<=x){
            console.log(z);
            z++;
        }
    }

    else {
        return false;
        }
    }
    

printUpTo(1000000); // should print all the integers from 1 to 1000000
y = printUpTo(-10); 
console.log(y); // should print false

//Challenge 2
function printSum(x) {
    var sum = 0;
    var printInt = 0;
    for(z=1;z<=x;z++){
        console.log(printInt+" : "+sum);
        sum+=z;
        printInt++;

    }
    console.log(printInt+" : "+sum);
    return sum
}
y = printSum(255) // should print all the integers from 0 to 255 and the sum at each point
console.log(y) // should print 32640

//Challenge 3
function printSumArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum+=x[i];
    }
    return sum;
}
console.log( printSumArray([1,2,3]) ); // should log 6

//Challenge 4
function largestVal(x) {
    var largestSoFar = x[0];
    
    for(i=0;i<x.length;i++){
        if(x[i] > largestSoFar){
            largestSoFar = x[i];
        }
    }
    
    return largestSoFar;
}
console.log( largestVal([8,3,11,2,-8]) ); // should log 11