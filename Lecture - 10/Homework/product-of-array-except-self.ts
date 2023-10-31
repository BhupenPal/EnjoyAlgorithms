function productExceptSelf(digits: number[]) {
  const response: number[] = new Array(digits.length);

  for (let i = 0; i <= digits.length - 1; i++) {
    if (i === 0) {
      response[i] = 1;
      continue;
    }

    response[i] = response[i - 1] * digits[i - 1];
  }

  let rightProduct = digits[digits.length - 1];
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1) {
      continue;
    }

    response[i] = response[i] * rightProduct;
    rightProduct *= digits[i];
  }

  console.log(response);
}

productExceptSelf([1, 2, 3, 4]);
productExceptSelf([4, 6, 2, 1, 3]);
productExceptSelf([]);
productExceptSelf([]);
