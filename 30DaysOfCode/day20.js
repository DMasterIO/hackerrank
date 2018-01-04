// https://www.hackerrank.com/challenges/30-sorting

function main() {
    var n = parseInt(readLine());
    let a = readLine().split(' ');
    a = a.map(Number);
    let swapCount = 0;

    //copy from exercise 
    for (let i = 0; i < n; i++) {
        // Track number of elements swapped during a single array traversal
        let numberOfSwaps = 0;

        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                swap(a, j, j + 1);
                numberOfSwaps++;
                swapCount++; //add total swap
            }
        }

        // If no elements were swapped during a traversal, array is sorted
        if (numberOfSwaps == 0) {
            break;
        }
    }
    
    console.log(`Array is sorted in ${swapCount} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length -1]}`);

}

const swap = (arr, a, b) => {
    let aux = arr[a];
    arr[a] = arr[b];
    arr[b] = aux;
}