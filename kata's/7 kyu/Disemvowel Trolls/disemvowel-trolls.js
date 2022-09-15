function disemvowel(str) {
  let vowels = new Map([['a'], ['o'], ['i'], ['u'], ['e']]);
  let str2 = '';

  for (let i = 0; i < str.length; i++) {
    if (!vowels.has(str.toLowerCase().charAt(i))) {
      str2 += str.charAt(i);
    }
  }

  return str2;
}
