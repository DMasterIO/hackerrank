// https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem

function processData(input) {
    //Enter your code here
    const lines = input.split('\n')
    lines.shift()
    const phoneBook = {}
    lines.forEach((line, index) => {
        if (line.indexOf(' ') != -1) {
            const [name, phoneNumber] = line.split(' ')
            phoneBook[name] = phoneNumber
        } else {
            if(phoneBook[line] === undefined)
                console.log('Not found')
            else
                console.log(`${line}=${phoneBook[line]}`)
        }
    })
}