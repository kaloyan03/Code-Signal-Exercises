// Given a string, find the number of different characters in it.



function solution(s) {
    let occurences = [];
    
    let diffChars = 0;

    for (const char of s) {
        if (!(occurences.includes(char))) {
            occurences.push(char);
            diffChars++;
        }
    }

    return diffChars;
}


// console.log(solution('cabca'));
// console.log(solution('aba'));
// console.log(solution('ccccccccccc'));
