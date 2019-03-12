import { cons as pairConstructor, car, cdr } from './pair';

const cons = (...args) => {
  const iter = (elements) => {
    if (!elements.length) {
      return null;
    }

    return pairConstructor(elements[0], iter(elements.slice(1)));
  };
  return iter(args);
};

const head = list => car(list);

const tail = list => cdr(list);

const isEmpty = list => list === null;

const toString = (list) => {
  const iter = (elements, str) => {
    if (isEmpty(elements)) {
      return str;
    }
    return iter(tail(elements), `${head(elements)}, ${str}`);
  };
  return iter(list, '');
};

export {
  cons, head, tail, isEmpty, toString,
};
