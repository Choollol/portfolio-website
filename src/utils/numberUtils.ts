export const roundDecimal = (num: number, digitsAfterDecimal: number) => {
  const tenPower = Math.pow(10, digitsAfterDecimal);
  return Math.round(num * tenPower) / tenPower;
};
