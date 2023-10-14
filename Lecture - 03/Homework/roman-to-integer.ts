/**
 * Convert Roman Number to Corresponding Integer Value
 *
 * Let’s understand the problem
 * Given a Roman numeral, write a program to find its corresponding decimal value.
 * Roman numerals are represented by seven different symbols
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 *
 * Problem Note
 * 1. The input contains only the characters 'I', 'V', 'X', 'L', 'C', 'D', 'M'.
 * 2. Input is a valid roman numeral in the range [1, 3999].
 * 3. A number in Roman numerals is a string of these symbols written in descending order
 * i.e. largest to smallest from left to right. For example, 2 is written as II in Roman numeral,
 * just two ones added together. 12 is written as XII, which is simply X + II.
 * The number 27 is XXVII, which is XX + V + II.
 * 4. We avoid four characters being repeated in successions such as IIII or VIIII.
 * Instead, the number four is written as IV because the 1 is before the 5, and we subtract it
 * making 4. The same principle applies to number 9, which is written as IX. The idea is: when there
 * is a smaller number placed before a larger number, the values are subtracted.
 *
 * Example 1: Input: XL, Output: 40
 * Explanation: XL is a Roman symbol which represents 40
 * Example 2: Input: MCMIV, Output: 1904
 * Explanation: M = 1000, CM = 900, IV = 4
 * Example 3: Input: LVIII, Output: 58
 * Explanation: L = 50, V= 5, III = 3
 * Example 4: Input: MCMXCIV, Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4
 */

const romanMap: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToDecimal(romanNum: string) {
  const romanDigits: string[] = romanNum.split("");
  let decimalNum: number = 0;

  for (let i = 0; i <= romanDigits.length - 1; i++) {
    const currentNumInDecimal = romanMap[romanDigits[i]];

    if (i === romanDigits.length - 1) {
      decimalNum += currentNumInDecimal;
      break;
    }

    const nextNumInDecimal = romanMap[romanDigits[i + 1]];

    if (nextNumInDecimal > currentNumInDecimal) {
      decimalNum += nextNumInDecimal - currentNumInDecimal;
      i++;
    } else {
      decimalNum += currentNumInDecimal;
    }
  }

  console.log("The decimal equivalent of: ", romanNum, " is: ", decimalNum);
  return decimalNum;
}

romanToDecimal("XL");
romanToDecimal("MCMIV");
romanToDecimal("LVIII");
romanToDecimal("MCMXCIV");
