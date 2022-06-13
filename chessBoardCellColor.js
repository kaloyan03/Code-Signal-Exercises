// Given two cells on the standard chess board, determine whether they have the same color or not.

function solution(cell1, cell2) {
    const possibleChessLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    let cell1Color = false;
    let cell2Color = false;

    let [cell1Letter, cell1Number] = cell1.split('');
    let [cell2Letter, cell2Number] = cell2.split('');

    const cell1Index = possibleChessLetters.indexOf(cell1Letter) + 1;
    const cell2Index = possibleChessLetters.indexOf(cell2Letter) + 1;

    if ((cell1Index % 2 == 0 && parseInt(cell1Number) % 2 == 0) || (cell1Index % 2 !== 0 && parseInt(cell1Number) % 2 !== 0)) {
        cell1Color = true;
    }


    if ((cell2Index % 2 == 0 && parseInt(cell2Number) % 2 == 0) || (cell2Index % 2 !== 0 && parseInt(cell2Number) % 2 !== 0)) {
        cell2Color = true;
    }
    return cell1Color == cell2Color;

   
}


// console.log(solution('A1', 'C3'));
// true
console.log(solution('A1', 'H3'));
// // false
console.log(solution('A1', 'B2'));
// true
