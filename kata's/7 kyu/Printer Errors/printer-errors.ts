export function printerError(s: string): string {
  return `${s.replace(/[a-mA-M]+/g, '').length}/${s.length}`;
}
