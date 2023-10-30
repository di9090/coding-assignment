// B. Perform sorting of an array in descending order.

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively merge sort each half
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements and merge them in descending order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] > right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let numbers = [5, 2, 8, 1, 9, 4];
numbers = mergeSort(numbers);
console.log(numbers);
