const sum = require('../src/utils/sum');

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('check list value of ', () => {
  expect(new Set(shoppingList)).toContain('milk');
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});


// /**
//  * @format
//  */

//  import 'react-native';
//  import React from 'react';
//  import App from '../App';
 
//  // Note: test renderer must be required after react-native.
//  import renderer from 'react-test-renderer';
 
//  it('renders correctly', () => {
//    renderer.create(<App />);
//  }); 
 
