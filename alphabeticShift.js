// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

function solution(inputString) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o', 'p', 'q','r','s','t','u','v','w','x','y','z'];

    let shiftedString = '';

    for (const char of inputString) {
        let currCharAlphabetIndex = alphabet.indexOf(char);
        
        let nextCharAlphabetIndex = currCharAlphabetIndex == alphabet.length - 1 ? 0 : currCharAlphabetIndex + 1;

        let nextChar = alphabet[nextCharAlphabetIndex];
        
        shiftedString += nextChar;

    }

    return shiftedString;
}


// console.log(solution('crazy'));
// console.log(solution('aaaabbbccd'));