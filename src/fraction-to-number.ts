const fractionPattern = /^\d+\/\d+$/;

export function fraction2number(f: string): number {
  if (!fractionPattern.test(f)) {
    throw new Error('input is not a fraction');
  }

  const fractions = f.split('/');
  if (!fractions?.length || fractions?.length < 2) {
    return 0.0;
  }
  const numerator = parseFloat(fractions[0] || '0');
  const denominator = parseFloat(fractions[1] || '1');
  return numerator / denominator;
}