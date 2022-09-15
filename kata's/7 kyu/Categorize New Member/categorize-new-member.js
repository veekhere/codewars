function openOrSenior(data) {
  let output = [];
  data.forEach((element) => {
    output.push(element[0] >= 55 && element[1] > 7 ? 'Senior' : 'Open');
  });

  return output;
}
