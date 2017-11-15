// https://www.hackerrank.com/challenges/30-conditional-statements/problem
const isOdd = n => n % 2;

function main() {
    var N = parseInt(readLine());
    if (!isOdd(N)) {
        if(N >=2 && N <=5) {
            console.log('Not Weird');
        }else{
            if (N >= 6 && N <= 20) 
                console.log('Weird');
            else
                if (N > 20)
                    console.log('Not Weird');
        }
    }else{
        console.log('Weird');
    }
}
