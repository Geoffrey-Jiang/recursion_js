function mergeSort(array) {
    // Continously half array until it consists of arrays of 1
    // arrays of 1 element are sorted
    // thus you can reconstruct the array by merging these subarrays
    // into larger subarrays
    // sorting as you go 
    // This sorting is easy since every subarray is already sorted
    // and thus is easy to copy

    let length = array.length;

    if (length > 1) {
        // DIVISION - O(nlogn) for dividing into sub-arrays of length 1
        // because it takes logn half-divisions to get to each individual element 
        // and you deal with n elements every time you divide (copying)

        // Half the arrays
        let first = array.slice(0, length / 2);
        let last = array.slice(length / 2, length);

        // Now the arrays are sorted
        mergeSort(first);
        mergeSort(last);

        // MERGING - O(nlogn) for merging
        // takes logn merges to get subarrays into full length array
        // checking n elements for merging for each merge

        // Merge the two halves
        let f = 0;
        let l = 0;
        let a = 0;
        while (f < first.length && l < last.length) {
            if (first[f] < last[l]) {
                array[a] = first[f];
                f++;
            } else {
                array[a] = last[l];
                l++;
            }
            a++;
        }

        // We need to check if any elements are still left to be inserted
        // This case occurs if the final element of either list is equal to the
        // other and this would potentially result in an improper inclusion
        // of elements above

        // Only one of my below while loops will run AT MAX
        while (f < first.length) {
            array[a] = first[f];
            a++;
            f++;
        }

        while (l < last.length) {
            array[a] = last[l];
            a++;
            l++;
        }
    }

    return array;
}

console.log(mergeSort([9, 8, 7, 6, 5, 1000]))