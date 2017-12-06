//https://www.hackerrank.com/challenges/30-inheritance/problem

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, id, scores = []) {
        super(firstName, lastName, id);
        this.scores = scores;
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate(){
        const average = this.scores.reduce((prev, act) => {
            return prev+act;
        }) / this.scores.length;
        let grade = 'O';
        switch (true) {
            case (average >= 80 && average < 90):
                grade = 'E';
                break;
            case (average >= 70 && average < 80):
                grade = 'A';
                break;
            case (average >= 55 && average < 70):
                grade = 'P';
                break;
            case (average >= 40 && average < 55):
                grade = 'D';
                break;
            case (average < 40):
                grade = 'T';
                break;
        }
        return grade;

    }
}