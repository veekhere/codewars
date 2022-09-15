function solution(number) {
  if (Math.sign(number) === -1 || Math.sign(number) === -0 || Math.sign(number) === 0) return 0;

  let res = [];
  for (let i = 0; i < number; i++) if (i % 3 == 0 || i % 5 == 0) res.push(i);

  return res.filter((el, i, arr) => arr.indexOf(el) === i).reduce((acc, item) => acc + item);
}
