// Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a. In other words, find the element x in a, which minimizes the following sum:
// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)


function solution(a) {

    const formula = (currNum, x) => Math.abs(currNum - x); 

    let bestResultSum = Number.MAX_VALUE;
    let bestResultNum = 0;

    for (const num of a) {
        let currResultSum = 0;
        for (const el of a) {
            currResultSum += formula(el, num);
        }
        if (bestResultSum > currResultSum) {
            bestResultNum = num;
            bestResultSum = currResultSum;
        }
    }

    return bestResultNum;
}


// console.log(solution([2, 4, 7]));
// console.log(solution([2, 3]));
// console.log(solution([1, 1, 3, 4]));
// console.log(solution([-10, -10, -10, -10, -10, -9, -9, -9, -8, -8, -7, -6, -5, -4, -3, -2, -1, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]));