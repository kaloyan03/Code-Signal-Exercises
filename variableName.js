// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.
// Check if the given string is a correct variable name.

function solution(name) {
    let isValid = true;
    let englishLetters = /^[A-Za-z]+$/;


    let firstChar = name[0];


    if (!isNaN(firstChar)) {
        isValid = false;
        return isValid;
    }

    for (const char of name) {
        if (!englishLetters.test(char) && char !== '_' && isNaN(char) || char.trim() == '') {
            isValid = false;
            return isValid;
        }
    }

    return isValid;

}

// asd
// console.log(solution('var_1__Int'));
// console.log(solution('qq-q'));
// console.log(solution('2w2'));