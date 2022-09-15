function solution(string) {
  return string
    .split('')
    .map((i) => i.replace(/[A-Z]/, ` ${i}`))
    .join('');
}
