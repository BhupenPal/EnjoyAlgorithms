function insertionSort(digits: number[]) {
  for (let i = 1; i <= digits.length - 1; i++) {
    const currentDigit = digits[i];
    let j = i - 1;

    while (j >= 0 && digits[j] > currentDigit) {
      digits[j + 1] = digits[j];
      j--;
    }

    digits[j + 1] = currentDigit;
  }

  return digits;
}

function generateWaveForm(digits: number[]) {
  const sortedDigits = insertionSort(digits);

  for (let i = 0; i <= sortedDigits.length - 1; i += 2) {
    const temp = sortedDigits[i];
    sortedDigits[i] = sortedDigits[i + 1];
    sortedDigits[i + 1] = temp;
  }

  console.log(`The generated wave form is ${sortedDigits}`);
}

generateWaveForm([1, 2, 3, 4]);
generateWaveForm([20, 10, 8, 6, 4, 2]);

console.log("----------------------------------");

function optimizedWaveForm(digits: number[]) {
  for (let i = 0; i <= digits.length - 1; i += 2) {
    if (digits[i] < digits[i - 1] && i !== 0) {
      let temp = digits[i];
      digits[i] = digits[i - 1];
      digits[i - 1] = temp;
    }

    if (digits[i] < digits[i + 1] && i !== digits.length - 1) {
      let temp = digits[i];
      digits[i] = digits[i + 1];
      digits[i + 1] = temp;
    }
  }

  console.log(`The generated wave form is ${digits}`);
}

optimizedWaveForm([1, 2, 3, 4]);
optimizedWaveForm([20, 10, 8, 6, 4, 2]);
