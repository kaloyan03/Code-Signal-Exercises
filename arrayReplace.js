// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

function solution(inputArray, elemToReplace, substitutionElem) {
    for (let i = 0; i < inputArray.length; i++) {
        let currElement = inputArray[i];

        if (currElement == elemToReplace) {
            inputArray[i] = substitutionElem;
        }
    }

    return inputArray; 


}


// console.log(solution([1, 2, 1], 1, 3));