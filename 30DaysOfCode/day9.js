// https://www.hackerrank.com/challenges/30-recursion/problem

function factorial(n) {
    // Complete this function
    return (n > 1) ? n * factorial(n-1) : n
}