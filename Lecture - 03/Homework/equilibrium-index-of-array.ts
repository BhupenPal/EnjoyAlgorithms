/**
 * Find Equilibrium Index of an Array
 *
 * Let's understand the problem
 * Write a program to find the equilibrium index of an array. The equilibrium index of
 * an array is an index such that the sum of elements at lower indexes is equal to the
 * sum of elements at higher indexes.
 *
 * In other words, the equilibrium index of an array is an index i such that the sum
 * of elements at indices less than i is equal to the sum of elements at indices
 * greater than i. A[0] + A[1] + ….. + A[i - 1] = A[i + 1] + ….. + A[n - 1],
 * where 0 <= i <= n - 1.
 *
 * Problem note:
 * For i = 0, we assume that the sum of elements at lower indexes is equal to 0.
 * For i = n - 1, we assume that the sum of elements at higher indexes is equal to 0.
 *
 * Example 1:
 * Input: A[] = [-7, 1, 5, 2, -4, 3, 0], Output: 3
 * Explanation: 3 is an equilibrium index, i.e., A[0] + A[1] + A[2] = A[4] + A[5] + A[6] = -1.
 *
 * Example 2:
 * Input: A[] = [0, 1, 3, -2, -1], Output: 1
 * Explanation: 1 is an equilibrium index, i.e., A[0] = A[2] + A[3] + A[4] = 0.
 *
 * Example 3:
 * Input: A[] = [1, 2, -2, -1], Output: -1
 * Explanation: There is no such equilibrium index in the array.
 */

function findEquilibriumIndexOfArray(originalList: number[]) {
  let totalSum = 0;
  let leftSum = 0;

  for (let i = 0; i <= originalList.length - 1; i++) {
    totalSum += originalList[i];
  }

  for (let i = 0; i <= originalList.length - 1; i++) {
    let rightSum = totalSum - leftSum - originalList[i];
    if (leftSum === rightSum) {
      console.log(`The equilibrium index for: ${originalList} is: ${i}`);
      return i;
    }
    leftSum += originalList[i];
  }

  console.log(`The equilibrium index for: ${originalList} does not exists`);
  return -1;
}

findEquilibriumIndexOfArray([-7, 1, 5, 2, -4, 3, 0]);
findEquilibriumIndexOfArray([0, 1, 3, -2, -1]);
findEquilibriumIndexOfArray([1, 2, -2, -1]);
