// Check if all digits of the given integer are even.

function solution(n) {
    let areAllEven = true;

    for (const char of String(n)) {
        if (char % 2 == 1) {
            areAllEven = false;
            break;
        }
    }

    return areAllEven;
}


// console.log(solution(248622));
// console.log(solution(642386));
