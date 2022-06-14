// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.


function solution(n, firstNumber) {
    
    var half = n/2;
    var newNum = half + firstNumber;
    
    if (newNum >= n){
        newNum -= n;
    }
    
    return newNum;
    
}

// console.log(solution(10, 2));