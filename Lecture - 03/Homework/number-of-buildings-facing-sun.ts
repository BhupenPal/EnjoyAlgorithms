/**
 * Count the number of buildings facing the sun
 *
 * Let’s understand the problem:
 * Given an input array height[] representing the heights of buildings.
 * Write a program to count the number of buildings facing the sunset.
 * It is assumed that the heights of all buildings are distinct.
 *
 * Examples:
 * Input: height[] = [7, 4, 8, 2, 9], Output: 3
 * Explanation: As 7 is the first element, it can see the sunset.
 * Similarly, 8 and 9 can see the sunset.
 * 4 and 2 can't see the sunset because 7 and 8 are hiding it.
 *
 * Input: height[] = [2, 3, 4, 5], Output: 4
 *
 * Critical ideas to think!
 * 1. How can we modify the above code to also return the building that can see the sunset?
 * 2. How can we modify the above code when some buildings have the same height?
 * Assume that a building of the same height will block the one after it.
 * 3. Is it possible to solve this problem using a stack?
 */

function countBuildingsFacingSun(height: number[]): number {
  if (height.length === 0) {
    return 0;
  }

  let count = 1;
  let maxHeight = height[0];

  for (let i = 1; i <= height.length - 1; i++) {
    if (height[i] > maxHeight) {
      maxHeight = height[i];
      count++;
    }
  }

  console.log("Number of building facing sun in: ", height, " is: ", count);
  return count;
}

countBuildingsFacingSun([7, 4, 8, 2, 9]);
countBuildingsFacingSun([2, 3, 4, 5]);
