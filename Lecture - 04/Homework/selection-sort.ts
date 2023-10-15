/**
 * Selection sort
 * Find the min/max of the array and swap it with it's correct position
 */
function selectionSort(digits: number[]) {
  /**
   * The outer loop does not need to go till n-1 because the last element
   * would already be in the correct place
   */
  for (let i = 0; i <= digits.length - 2; i++) {
    let minEleIndex = i;

    for (let j = i + 1; j <= digits.length - 1; j++) {
      // Switching this if statement will reverse the order of sorted array
      if (digits[j] < digits[minEleIndex]) {
        minEleIndex = j;
      }
    }

    const temp = digits[i];
    digits[i] = digits[minEleIndex];
    digits[minEleIndex] = temp;
  }

  console.log(`The sorted array is ${digits}`);
}

selectionSort([1, 2, 6, 3]);
selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
selectionSort([1, 2, 6, 3, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, -39, 26, 0, -1]);
