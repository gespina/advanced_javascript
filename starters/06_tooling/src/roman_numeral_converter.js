const ROMAN_TO_DECIMAL = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

const convert = (romanNumeral) => {
  return romanNumeral
    .split('')
    .map((s) => s.toLowerCase())
    .reduce((acc, curr, idx, arr) => {
      if (idx === 0) {
        acc += ROMAN_TO_DECIMAL[curr];
      } else {
        let currentVal = ROMAN_TO_DECIMAL[arr[idx]];
        let prevVal = ROMAN_TO_DECIMAL[arr[--idx]];
        acc =
          currentVal > prevVal
            ? acc - prevVal + currentVal - prevVal
            : acc + currentVal;
      }
      return acc;
    }, 0);
};

export default convert;
