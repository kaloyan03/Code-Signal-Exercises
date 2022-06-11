function solution(inputString) {
    function checkIfNotANumber(num) {
        if (isNaN(num)) {
            return true;
        }
    }
    
    function checkForWhiteSpaces(num) {
        if (num.trim() == '') {
            return true;
        }
    }
    
    function checkForLeadingZeros(num) {
        if (num.length !== 1 && num[0] == 0) {
            return true;
        }
    }
    
    function checkIfNumberInBounds(num) {
        if (num > maxIp4Number || num < minIp4Number) {
            return true;
        }
    }

    const minIp4Number = 0;
    const maxIp4Number = 255;
    
    let ipNumbers = inputString.split('.');
    
    if (ipNumbers.length < 4 || ipNumbers.length > 4) {
        return false;
    }

    let isValidIp = true;
  
    for (const num of ipNumbers) {
        if (checkIfNotANumber(num) || checkForLeadingZeros(num) || checkForWhiteSpaces(num) || checkIfNumberInBounds(num)) {
            isValidIp = false;
            break;
        }
    }
  
    return isValidIp;
}
  
  
  console.log(solution('192.168.0.1')); 
//   true
  console.log(solution('255.255.255.255'));
//   true
  console.log(solution('280.100.92.101'));
//   false
  console.log(solution('17.233.00.131'));
//   false
console.log(solution('17.233.01.131'));
// false

console.log(solution('.254.255.0'));

console.log(solution('1.1.1.1.1'));

