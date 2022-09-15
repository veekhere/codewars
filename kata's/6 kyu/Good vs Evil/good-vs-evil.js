function goodVsEvil(good, evil) {
  const goodWorth = [1, 2, 3, 3, 4, 10]; // weights for good
  const evilWorth = [1, 2, 2, 2, 3, 5, 10]; // weights for evil
  let _good = 0;
  let _evil = 0;

  good.split(' ').forEach((item, i) => {
    if (+item) _good += +item * goodWorth[i];
  });
  evil.split(' ').forEach((item, i) => {
    if (+item) _evil += +item * evilWorth[i];
  });

  if (_good > _evil) return 'Battle Result: Good triumphs over Evil';
  if (_evil > _good) return 'Battle Result: Evil eradicates all trace of Good';

  return 'Battle Result: No victor on this battle field';
}
