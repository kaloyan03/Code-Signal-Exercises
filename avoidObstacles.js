function solution(inputArray) {
    inputArray.sort();
    let set = new Set();
    let jumpLength = 2;
    for (let i = 0; i < inputArray.length; i++) {
      set.add(inputArray[i]);
    }


    while (set.has(jumpLength)) {
      jumpLength++;
    }
    
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] % jumpLength === 0) {
        jumpLength++;
        i = -1;
      }
    }
    return jumpLength;
    
  }
  
  
  

console.log(solution([5, 3, 6, 7, 9]));