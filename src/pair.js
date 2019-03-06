const cons = (a, b) => funct => funct(a, b);

const car = pair => pair(a => a);

const cdr = pair => pair((a, b) => b);

export { cons, car, cdr };
