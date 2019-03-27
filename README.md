[![Maintainability](https://api.codeclimate.com/v1/badges/cd9ffa18f8f315e31f0d/maintainability)](https://codeclimate.com/github/vikzh/htmlManipulator/maintainability)[![Test Coverage](https://api.codeclimate.com/v1/badges/cd9ffa18f8f315e31f0d/test_coverage)](https://codeclimate.com/github/vikzh/htmlManipulator/test_coverage)[![Build Status](https://travis-ci.org/vikzh/htmlManipulator.svg?branch=master)](https://travis-ci.org/vikzh/htmlManipulator)
# Html Manipulator
### Using
````js
import { make, append, node, name, value, toString, mirror, getTagsByName, } from 'htmlManipulator'

const html = make(); // empty list of html
const h1Node = node('h1', 'heading');
name(h1Node); // h1
value(h1Node); // heading
const pNode = node('p', 'paragraph text');
const htmlWith2El = append(html, h1Node);
const htmlWith3El = append(html, pNode);
toString(htmlWith3El); // <h1>heading</h1><p>paragraph text</p>
````