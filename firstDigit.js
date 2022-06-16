// Find the leftmost digit that occurs in a given string.

function solution(inputString) {
    let digit = 0;
    
    for (const char of inputString) {
        if (!isNaN(char) && char.trim() != '') {
            digit = char;
            break;
        }
    }

    return digit;
}

// console.log(solution('var_1__Int'));
// console.log(solution('q2q-q'));
// console.log(solution('a a_933'));
