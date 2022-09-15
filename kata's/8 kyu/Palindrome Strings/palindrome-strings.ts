export function isPalindrome(line: string): boolean {
  return line === line.split('').reverse().join('');
}
