const cons = (a, b) => {
  const pair = funct => funct(a, b);
  pair.isPair = true;
  return pair;
};

const car = pair => pair(a => a);

const cdr = pair => pair((a, b) => b);

const isPair = pair => typeof pair === 'function' && pair.isPair === true;

export {
  cons, car, cdr, isPair,
};
