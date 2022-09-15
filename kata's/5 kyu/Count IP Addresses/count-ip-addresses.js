// bit operators practice =)

function ipsBetween(start, end) {
  const s = start
    .split('.')
    .reverse()
    .map((v, i) => (1 << (8 * i)) + +v - 1);
  const e = end
    .split('.')
    .reverse()
    .map((v, i) => (1 << (8 * i)) + +v - 1);

  return e
    .map((v, i) => v - s[i])
    .map((v, i) => v * (1 << (8 * i)))
    .reduce((a, b) => a + b, 0);
}
