function isPangram(string) {
  return (
    'abcdefghijklmnopqrstuvwxyz' ==
    Array.from(string.replace(/[.,\/#!$%\^&\*;:{}=\- _`~()0123456789]/g, '').toLowerCase())
      .filter(function (item, pos) {
        return (
          Array.from(string.replace(/[.,\/#!$%\^&\*;:{}=\- _`~()0123456789]/g, '').toLowerCase()).indexOf(item) == pos
        );
      })
      .sort()
      .join('')
  );
}
