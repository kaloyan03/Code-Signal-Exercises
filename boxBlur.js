function solution(image) {
    const columns = image[0].length;
    const rows = image.length;
    
    let blurredImage = [];
    
    for (let rowIndex = 0; rowIndex < rows - 2; rowIndex++) {
        blurredImage.push([]);
        for (let colIndex = 0; colIndex < columns - 2; colIndex++) {
            top = image[rowIndex][colIndex] + image[rowIndex][colIndex + 1] + image[rowIndex][colIndex + 2];
            middle = image[rowIndex + 1][colIndex] + image[rowIndex + 1][colIndex + 1] + image[rowIndex + 1][colIndex + 2];
            bottom = image[rowIndex + 2][colIndex] + image[rowIndex + 2][colIndex + 1] + image[rowIndex + 2][colIndex + 2];

            let avrg = Math.floor((top + middle + bottom) / 9);

            blurredImage[rowIndex].push(avrg);
        }
    }

    return blurredImage;
}

// console.log(solution(
//     [
//     [1, 1, 1],
//     [1, 7, 1],
//     [1, 1, 1]
//     ]
// ));


// console.log(solution([
//     [7, 4, 0, 1], 
//     [5, 6, 2, 2], 
//     [6, 10, 7, 8], 
//     [1, 4, 2, 0]
// ]));