export default function add(x: number): any {
  const inner = function(y: number) {
    return add(x + y);
  };

  inner.valueOf = function() {
    return x;
  };

  return inner;
}
