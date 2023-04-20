const decimalPattern = /^\d+\.\d+$/;

/**
 * convert decimal number to fraction
 */
export function number2fraction(n: number, mixedFraction: boolean = false): string {
  if (!decimalPattern.test(n.toString())) {
    return n.toString();
  }

  const strNum = n.toString();
  const afterDecimal = strNum.length - 2;
  const denominator = Math.pow(10, afterDecimal);
  const numerator = n * denominator;
  const divisor = gcd(numerator, denominator);

  if (mixedFraction) {
    const wholeNumberRaw = numerator - (numerator % denominator);
    const wholeNumber = wholeNumberRaw / denominator;
    const newNumerator = numerator - wholeNumberRaw;
    if (wholeNumber) {
      return `${wholeNumber} ${newNumerator / divisor}/${denominator / divisor}`;
    }
  }

  return `${numerator / divisor}/${denominator / divisor}`;
}

/**
 * find greatest common divider between x & y
 */
function gcd(x: number, y: number): number {
  if (!y) {
    return x;
  }

  return gcd(y, x % y);
}