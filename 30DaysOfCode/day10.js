// https://www.hackerrank.com/challenges/30-binary-numbers/problem

function main() {
    const n = parseInt(readLine());
    const binary = n.toString(2)
    let counter = 0, max = 0
    for (let i = 0; i < binary.length; i++ ) {
        if (binary[i] == 1){
            counter++
            max = (counter > max) ? counter : max
        } else
            counter = 0
    }
    console.log(max)
}