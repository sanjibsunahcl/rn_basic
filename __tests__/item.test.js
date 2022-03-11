import React from 'react';
import renderer from 'react-test-renderer';
import Items from '../src/screen/items';

it('Item snapshot', () => {
  const snap = renderer.create(<Items />).toJSON();
  expect(snap).toMatchSnapshot();
});
