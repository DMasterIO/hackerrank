// https://www.hackerrank.com/challenges/30-review-loop/problem

const isOdd = n => n % 2;

function processData(input) {
    //Enter your code here
    
    const lines = input.split('\n')
    lines.forEach((line, index) => {
        if(index > 0){
            let odd = [], even = [];
            for(let i = 0; i < line.length; i++) {
                if (isOdd(i))
                    odd.push(line[i])
                else
                    even.push(line[i])
            }
            console.log(even.join('').concat(' ').concat(odd.join('')))
        }
    })
    
} 