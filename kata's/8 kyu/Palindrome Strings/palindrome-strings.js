export function isPalindrome(line) {
  if (typeof line === 'string') {
    return line === line.split('').reverse().join('');
  }
  return false;
}
