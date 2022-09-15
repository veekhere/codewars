multiplicationTable = function (size) {
  const arr = Array.from({ length: size }, (_, i) => i + 1);
  const tmp = [];
  for (i = 1; i < size + 1; i++) {
    tmp.push(arr.map((v) => v * i));
  }

  return tmp;
};
