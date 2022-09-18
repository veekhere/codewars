export function getLengthOfMissingArray(arrayOfArrays: any[]): number {
  if (arrayOfArrays.length === 0) return 0;

  let _ = arrayOfArrays.map(arr => arr?.length).sort((a, b) => a - b);
  for (let i = 0; i < _.length - 1; i++) {
    if (!_[i + 1] || !_[i]) return 0;
    if (_[i + 1] - _[i] !== 1) {
      return _[i] + 1;
    }
  }
  return 0;
}
