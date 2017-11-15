// https://www.hackerrank.com/challenges/30-class-vs-instance/problem
class Person{
    constructor(initialAge){
        if (initialAge < 0) {
            console.log('Age is not valid, setting age to 0.')
            this.age =0
        }else
            this.age = initialAge
    }
    // Add some more code to run some checks on initialAge
    amIOld() {
        // Do some computations in here and print out the correct statement to the console
        if(this.age < 13)
            console.log('You are young.')
        else
            if(this.age >= 13 && this.age < 18)
                console.log('You are a teenager.')
            else
                console.log('You are old.')
    
    }
    yearPasses() {
        // Increment the age of the person in here
        this.age++
    }
}