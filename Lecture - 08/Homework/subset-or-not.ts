function subsetOrNot(mainSet: number[], subSet: number[]) {
  if (subSet.length > mainSet.length) {
    console.log("Length of subset is greater than main-set");
    return false;
  }

  let i = 0,
    j = 0;
  while (i <= mainSet.length - 1 && j <= subSet.length - 1) {
    if (mainSet[i] === subSet[j]) {
      i++;
      j++;
    } else if (mainSet[i] > subSet[j]) {
      console.log("Element does not exists in main-set");
      return false;
    } else {
      i++;
    }
  }

  if (j === subSet.length) {
    console.log("The subset relation is verified");
    return true;
  } else {
    console.log("The subset relation is not verified");
    return false;
  }
}

const A = [2, 4, 6, 8, 9];
const B = [2, 6, 8];
subsetOrNot(A, B);
