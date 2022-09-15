function nodeToHex(n) {
  let hex = (n < 0 ? 0 : n > 255 ? 255 : n).toString(16).toUpperCase();
  return hex.length === 1 ? '0' + hex : hex;
}

function rgb(r, g, b) {
  return nodeToHex(r) + nodeToHex(g) + nodeToHex(b);
}
