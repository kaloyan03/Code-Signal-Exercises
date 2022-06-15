// Given array of integers, remove each kth element from it.

function solution(inputArray, k) {
    let iterationsCounter = 0;
    let arrayResult = [];

    for (let i = 0; i < inputArray.length; i++) {
        iterationsCounter += 1;

        if (iterationsCounter == k) {
            iterationsCounter = 0;
        } else {
            arrayResult.push(inputArray[i]);
        }
    }

    return arrayResult;

}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(solution([1, 1, 1, 1, 1], 1));
// console.log(solution([1, 2, 1, 2, 1, 2, 1, 2], 2));
// console.log(solution([2, 4, 6, 8, 10], 2));