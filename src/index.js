import { cons as pairConstructor, cdr, car } from './pair';
import {
  cons as listConstructor, head, tail, isEmpty, toString as listToString,
} from './list';

const myList = listConstructor(1, 2, 3);
console.log(listToString(myList));
