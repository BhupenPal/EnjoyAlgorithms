/**
 * Check Array is a Valid Mountain or Not
 *
 * Let’s understand the problem
 * Given an array X of n integers, write a program to check if the array is a valid mountain array or not.
 *
 * The array X is a mountain array if and only if n >= 3 and there exists
 * some i (0 < i < n -1) such that: X[0] < X[1] <...< X[i-1] < X[i] and X[i] > X[i+1] > ...> X[n-1].
 * In other words, the array is a valid mountain when it is first strictly increasing and then strictly decreasing.
 *
 * Examples
 * Input: X[] = [5, 2, 1, 4], Output: false
 * Input: X[] = [5, 8, 8], Output: false
 * Input: X[] = [1, 2, 6, 5, 3], Output: true
 *
 * Critical ideas to think!
 * 1. Can we think of another approach to solve the problem by walking from left to right?
 * 2. Can we solve this problem by counting the peak and valley in the given array?
 * In the mountain array, Peak count = 1, Valley count = 0
 * 3. What would be the best, worst and average case analysis of the 2nd approach?
 */

function checkValidMountain(hillsList: number[]): boolean {
  if (hillsList.length < 3) {
    return false;
  }

  let isValidMountain: boolean = true;
  let isDeclineStarted: boolean = false;

  for (let i = 1; i <= hillsList.length - 1; i++) {
    if (hillsList[i] > hillsList[i - 1] && !isDeclineStarted) {
      continue;
    }

    if (hillsList[i] < hillsList[i - 1]) {
      isDeclineStarted = true;
      continue;
    }

    isValidMountain = false;
    break;
  }

  console.log(
    "The input array: ",
    hillsList,
    ` is a ${isValidMountain ? "" : "not"} valid mountain`
  );
  return isValidMountain;
}

checkValidMountain([5, 2, 1, 4]);
checkValidMountain([5, 8, 8]);
checkValidMountain([1, 2, 6, 5, 3]);
