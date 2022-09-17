export function duplicateCount(text: string): number {
  if (text === '') return 0;

  const _: { [k: string]: number; } = {};
  text.toLowerCase().split('').forEach(function(ch: string) {
    _[ch] = (_[ch] || 0) + 1;
  });

  return Object.values(_).reduce((acc, i) => i > 1 ? acc + 1 : acc, 0);
}
