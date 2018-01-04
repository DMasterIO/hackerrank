// https://www.hackerrank.com/challenges/30-running-time-and-complexity/problem

function processData(input) {
    //Enter your code here
    const values = input.split('\n');
    values.shift();
    values.forEach(isPrime);
} 

const isPrime = (n) => {
    let isPrime = n > 1;
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }        
    console.log(isPrime ? "Prime" : "Not prime");
}