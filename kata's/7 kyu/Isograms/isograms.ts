export function isIsogram(str: string): boolean {
  return (/^(?:(\w)(?!.*\1))*$/).test(str.toLowerCase());
}
