/**
 * Insertion sort
 * Repeatedly insert an element from unsorted array to it's correct position
 * in sorted array.
 */

function insertionSort(digits: number[]) {
  for (let i = 1; i <= digits.length - 1; i++) {
    const currentDigit = digits[i];
    let j = i - 1;

    while (j >= 0 && digits[j] > currentDigit) {
      digits[j + 1] = digits[j];
      j--;
    }

    digits[j + 1] = currentDigit;
  }

  console.log(`The sorted array is ${digits}`);
}

insertionSort([1, 2, 6, 3]);
insertionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
insertionSort([1, 2, 6, 3, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, -39, 26, 0, -1]);
