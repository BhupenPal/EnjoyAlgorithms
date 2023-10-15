/**
 * Bubble sort
 * Repeatedly swap two adjacent elements if they are in wrong order
 */
function bubbleSort(digits: number[]) {
  for (let i = 0; i <= digits.length - 1; i++) {
    for (let j = 0; j <= digits.length - 1; j++) {
      // Switching this if statement will reverse the order of sorted array
      if (digits[j] > digits[j + 1]) {
        const temp = digits[j];
        digits[j] = digits[j + 1];
        digits[j + 1] = temp;
      }
    }
  }

  console.log(`The sorted array is ${digits}`);
}

bubbleSort([1, 2, 6, 3]);
bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
bubbleSort([1, 2, 6, 3, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, -39, 26, 0, -1]);
