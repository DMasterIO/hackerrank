// https://www.hackerrank.com/challenges/30-generics/problem    
    
public <T>void printArray(T[] input) {
    for (T val : input){
        System.out.println(val.toString());
    }
}