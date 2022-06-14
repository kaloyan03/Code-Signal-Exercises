// You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.

function solution(deposit, rate, threshold) {
    let increasedBalance = deposit;
    let yearsCount = 0;

    while (increasedBalance < threshold) {
        increasedBalance = increasedBalance + increasedBalance * rate / 100;
        yearsCount++;
    }

    return yearsCount;


}


// console.log(solution(100, 20, 170));

