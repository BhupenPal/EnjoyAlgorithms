function subsetOrNot(mainSet: number[], subSet: number[]) {
  if (subSet.length > mainSet.length) {
    console.log("Length of subset is greater than main-set");
    return false;
  }

  let i = 0,
    j = 0;
  while (i <= mainSet.length - 1 && j <= subSet.length - 1) {
    if (A[i] === B[j]) {
      i++;
      j++;
    } else if (A[i] > B[j]) {
      console.log("Element does not exists in main-set");
      return false;
    } else {
      i++;
    }
  }

  console.log("The subset relation is verified");
}

const A = [2, 4, 6, 8, 9];
const B = [2, 6, 8];
subsetOrNot(A, B);
