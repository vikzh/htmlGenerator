import {
  cons as consPair, car, cdr,
} from 'pairs-js';
import {
  cons as consList, push, head, tail, isEmpty, map, reduce, reverse,
} from 'lists-js';

const make = () => consList();

const append = (dom, element) => push(element, dom);

const node = (tag, content) => consPair(tag, content);

const name = element => car(element);
const value = element => cdr(element);

const toString = (elements) => {
  if (isEmpty(elements)) {
    return '';
  }
  const element = head(elements);
  const tag = name(element);
  return `${toString(tail(elements))}<${tag}>${value(element)}</${tag}>`;
};

const mirror = elements => map(
  element => node(name(element), value(element).split('').reverse().join('')), elements,
);

const getTagsByName = (html, tagName) => reverse(
  reduce((tag, acc) => (name(tag) === tagName ? push(tag, acc) : acc), make(), html),
);

export {
  make, append, node, name, value, toString, mirror, getTagsByName,
};
