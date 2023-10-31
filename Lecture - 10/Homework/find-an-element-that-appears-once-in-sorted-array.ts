function binarySearch(
  digits: number[],
  startIndex: number,
  endIndex: number,
  query: number
) {
  const mid = Math.ceil((endIndex + startIndex) / 2);
  if (digits[mid] === query) {
    console.log(mid);
    return mid;
  }

  if (startIndex >= endIndex) {
    console.log(-1);
    return -1;
  }

  if (query < digits[mid]) {
    return binarySearch(digits, startIndex, mid - 1, query);
  }

  if (query > digits[mid]) {
    return binarySearch(digits, mid + 1, endIndex, query);
  }
}

const request1 = [1, 2, 3, 4, 5, 6, 7];
binarySearch(request1, 0, request1.length - 1, 8);

const request2 = [-60, 0, 8, 10, 20, 50, 80];
binarySearch(request2, 0, request2.length - 1, 50);
