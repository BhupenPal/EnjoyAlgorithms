function findMax(digits: number[], startIndex: number, endIndex: number) {
  const mid = (startIndex + endIndex) / 2;

  if (digits[mid] > digits[mid + 1]) {
    return digits[mid];
  }
}

const request1 = [10, 20, 30, 90, 1];
findMax(request1, 0, request1.length - 1);
