
const isPowerOfThree = (n) => {
  if (n === 1) {
    return true;
  } else if (n % 3 !== 0) {
    return false;
  }
  return isPowerOfThree(n / 3);
};
export default isPowerOfThree;
