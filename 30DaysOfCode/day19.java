// https://www.hackerrank.com/challenges/30-interfaces/problem

class Calculator implements AdvancedArithmetic {
    
    public int divisorSum(int n) {
        int sum = n;
        for (int x = 1; x <= n/2; x++) {
            if(n % x == 0) {
                sum += x;
            }
        }
        return sum;
    }
}