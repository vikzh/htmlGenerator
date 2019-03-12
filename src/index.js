import { cons as pairConstructor, cdr, car } from './pair';
import {
  cons as listConstructor, head, tail, isEmpty, toString as listToString, reverse, has, count,
} from './list';

const myList = listConstructor(1, 2, 3);
const reversedList = reverse(myList);
console.log(listToString(reversedList));
