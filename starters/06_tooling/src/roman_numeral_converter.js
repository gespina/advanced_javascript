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
  let romanNumIn = romanNumeral.split('').map((s) => s.toLowerCase());
  let keys = Object.keys(ROMAN_TO_DECIMAL);

  if (romanNumIn.some((s) => !keys.includes(s))) {
    throw new Error('Please enter a valid Roman Numeral value');
  } else {
    return romanNumIn.reduce((acc, curr, idx, arr) => {
      if (idx === 0) {
        acc += ROMAN_TO_DECIMAL[curr];
      } else {
        let currVal = ROMAN_TO_DECIMAL[arr[idx]];
        let prevVal = ROMAN_TO_DECIMAL[arr[--idx]];
        acc =
          currVal > prevVal ? acc - prevVal + currVal - prevVal : acc + currVal;
      }
      return acc;
    }, 0);
  }
};

export default convert;
