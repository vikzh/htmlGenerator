import {
  make, toString, value, append, name, node, mirror, getTagsByName,
} from '../src';

describe('List', () => {
  it('#make', () => {
    const myStructure = make();
    expect(toString(myStructure)).toBe('');
  });

  it('#node', () => {
    const html = make();
    const nodeElement = node('div', 'text');
    const updatedHtml = append(html, nodeElement);
    expect(toString(updatedHtml)).toBe('<div>text</div>');
  });

  it('#name', () => {
    const nodeElement = node('div', 'text');
    expect(name(nodeElement)).toBe('div');
    expect(value(nodeElement)).toBe('text');
  });

  it('#value', () => {
    const nodeElement = node('div', 'text');
    expect(value(nodeElement)).toBe('text');
  });

  it('#append', () => {
    const html = make();
    const htmlWithOneElement = append(html, node('header', 'head text'));
    expect(toString(htmlWithOneElement)).toBe('<header>head text</header>');
    const htmlWithTwoElements = append(htmlWithOneElement, node('body', 'body text'));
    expect(toString(htmlWithTwoElements)).toBe('<header>head text</header><body>body text</body>');
  });

  it('#mirror', () => {
    const html = make();
    const htmlWithOneElement = append(html, node('header', 'head text'));
    expect(toString(mirror(htmlWithOneElement))).toBe('<header>txet daeh</header>');
  });

  it('#getTagsByName', () => {
    let html = make();
    html = append(html, node('header', 'head text'));
    html = append(html, node('p', 'paragraph text'));
    html = append(html, node('p', 'par 2'));
    const pTags = getTagsByName(html, 'p');
    expect(toString(pTags)).toBe('<p>paragraph text</p><p>par 2</p>');
  });
});
