import {
  cons as consPair, car, cdr,
} from 'pairs-js'
import {
  cons as consList, push,head, tail, isEmpty,
} from 'lists-js';

export const make = () => consList();

export const append = (dom, element) => push(element, dom);

export const node = (tag, content) => consPair(tag, content);

export const name = element => car(element);
export const value = element => cdr(element);

export const toString = (elements) => {
  if (isEmpty(elements)) {
    return '';
  }
  const element = head(elements);
  const tag = name(element);
  return `${toString(tail(elements))}<${tag}>${value(element)}</${tag}>`;
};