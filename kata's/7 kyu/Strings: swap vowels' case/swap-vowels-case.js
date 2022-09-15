function swapVowelCase(str) {
  return str.replace(/[aeoui]/gi, (x) => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()));
}
