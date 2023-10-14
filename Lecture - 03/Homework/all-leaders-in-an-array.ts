/**
 * Find all Leaders in an Array
 *
 * Let's understand the problem
 * Given an integer array X[] of size n, write a program to find all the
 * leaders in the array X[]. An element is a leader if it is strictly
 * greater than all the elements to its right side.
 *
 * 1. The last element of an array is a leader by default.
 * 2. The largest element of an array is also a leader by default.
 * 3. Suppose all the array elements are unique.
 * 4. Ordering in the output doesn’t matter.
 *
 * Example 1
 * Input: X[] = [16, 17, 4, 3, 5, 2], Output: [17, 5, 2]
 * Explanation: Element 2 is the rightmost element, so it is a leader by default.
 * 17 and 5 are also leader elements because they are greater than all the elements
 * on their right side.
 *
 * Example 2
 * Input: X[] = [6, 5, 4, 3, 2, 1], Output: [6, 5, 4, 3, 2, 1]
 * Explanation: All elements are leaders because they are greater than all the
 * elements on their right side. Element 1 is the rightmost element, so it is a leader by default.
 *
 * Example 3
 * Input: X[] = [1, 2, 3, 4, 5, 6], Output: [6]
 * Explanation: Element 6 is the rightmost element, which is a leader by default.
 * Otherwise, all elements are less than all on their right side.
 *
 * Critical ideas to think!
 * 1. How can we modify the above solutions to store the output in a stable order or
 * in the same order as they are present in the input?
 * 2. How can we modify the above code to handle the scenario of duplicate elements?
 * 3. Can we think of solving this problem using recursion? If yes, what would be
 * the time and space complexity?
 * 4. Can we think of solving this problem using a stack? If yes, what would be the
 * time and space complexity?
 */

function findAllTheLeaders(candidates: number[]): number[] | null {
  if (candidates.length === 0) {
    return null;
  }

  const leaders: number[] = [candidates[candidates.length - 1]];
  let maxLeaderFromMax: number = leaders[0];

  for (let i = candidates.length - 2; i >= 0; i--) {
    if (candidates[i] > maxLeaderFromMax) {
      leaders.push(candidates[i]);
      maxLeaderFromMax = candidates[i];
    }
  }

  console.log("All the leaders in array: ", candidates, " are: ", leaders);
  return leaders;
}

findAllTheLeaders([16, 17, 4, 3, 5, 2]);
findAllTheLeaders([6, 5, 4, 3, 2, 1]);
findAllTheLeaders([1, 2, 3, 4, 5, 6]);
