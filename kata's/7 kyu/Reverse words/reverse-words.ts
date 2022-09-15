export const reverseWords = (str: string) =>
  str.split(' ')
    .flatMap(word => [word.split('').reverse().join('')])
    .join(' ');
