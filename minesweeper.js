function solution(matrix) {
    const rowsCount = matrix.length;
    const columnsCount = matrix[0].length;

    let minesweeperMatrix = [];

    for (let rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
        minesweeperMatrix.push([]);
        for (let colIndex = 0; colIndex < columnsCount; colIndex++) {
            let bottomValue;
            let topValue;
            let leftValue;
            let rightValue;
        
            let topLeftValue;
            let topRightValue;
            let bottomLeftValue;
            let bottomRightValue;

            if (rowIndex !== 0) {
                topValue = matrix[rowIndex - 1][colIndex];
            }

            if (rowIndex !== rowsCount - 1) {
                bottomValue = matrix[rowIndex + 1][colIndex];
            }

            if (colIndex !== 0) {
                leftValue = matrix[rowIndex][colIndex - 1];
            }

            if (colIndex !== columnsCount - 1) {
                rightValue = matrix[rowIndex][colIndex + 1];
            }

            if (rowIndex !== 0 && colIndex !== 0) {
                topLeftValue = matrix[rowIndex - 1][colIndex - 1];
            }

            if (rowIndex !== 0 && colIndex !== columnsCount - 1) {
                topRightValue = matrix[rowIndex - 1][colIndex + 1];
            }

            if (rowIndex !== rowsCount - 1 && colIndex !== 0) {
                bottomLeftValue = matrix[rowIndex + 1][colIndex - 1];
            }

            if (rowIndex !== rowsCount - 1 && colIndex !== columnsCount -1) {
                bottomRightValue = matrix[rowIndex + 1][colIndex + 1];
            }


            let bombsCount = [topValue, bottomValue, leftValue, rightValue, topLeftValue, topRightValue, bottomLeftValue, bottomRightValue].filter(el => el == true).length;

            minesweeperMatrix[rowIndex].push(bombsCount);

        }
    }

    return minesweeperMatrix;
}

console.log(
    solution(
        [
            [true, false, false],
            [false, true, false],
            [false, false, false]
        ]
    )
);