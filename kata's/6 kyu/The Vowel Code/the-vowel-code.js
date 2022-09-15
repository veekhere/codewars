const codeObj = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};
const codeArr = Object.keys(codeObj);

function encode(string) {
  return string
    .split('')
    .map((i) => codeObj[i] || i)
    .join('');
}

function decode(string) {
  return string
    .split('')
    .map((i) => (parseInt(i) ? codeArr[i - 1] : i))
    .join('');
}
