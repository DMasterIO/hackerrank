// https://www.hackerrank.com/challenges/30-exceptions-string-to-integer/problem

function main() {
    const S = readLine();
    try{
        console.log(parseInt(S).toString().replace('NaN', 'Bad String'));
    }
    catch(exception){
        console.log('Bad String');
    }
    
}