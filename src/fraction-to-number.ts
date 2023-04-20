const fractionPattern = /^\d+\/\d+$/;
const mixedFractionPattern = /^\d+ \d+\/\d+$/;

export function fraction2number(f: string): number {
  if (!(fractionPattern.test(f) || mixedFractionPattern.test(f))) {
    throw new Error('input is not a fraction');
  }

  const mixedFraction = mixedFractionPattern.test(f);

  let fractions = [];
  let wholeNumber = 1;
  if (mixedFraction) {
    const mixedFractions = f.split(' ');
    if (!mixedFractions?.length || mixedFractions?.length < 2) {
      return 0.0;
    }

    wholeNumber = parseFloat(mixedFractions[0]) || 1;
    fractions = mixedFractions[1].split('/')
  } else {
    fractions = f.split('/');
  }

  if (!fractions?.length || fractions?.length < 2) {
    return 0.0;
  }
  const numerator = parseFloat(fractions[0] || '0');
  const denominator = parseFloat(fractions[1] || '1');

  if (mixedFraction) {
    return ((wholeNumber * denominator) + numerator) / denominator;
  }

  return numerator / denominator;
}