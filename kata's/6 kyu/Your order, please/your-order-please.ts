export function order(words: string): string {
  return words.split(' ')
    .sort((a, b) => +(/\d{1}/).exec(a)?.shift()! - +(/\d{1}/).exec(b)?.shift()!)
    .join(' ');
}
