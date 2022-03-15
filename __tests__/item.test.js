import React from 'react';
import {create, act} from 'react-test-renderer';
import Items from '../src/screen/items';

const tree = create(<Items />);

// jest.runAllTimers();
//Snap shot test
it('Item snapshot', () => {
  expect(tree).toMatchSnapshot();
});

test('button press', () => {
  //button press
  const button = tree.root.findByProps({testID: 'myButton'}).props;
  act(() => button.onPress());

  const text = tree.root.findByProps({testID: 'myText'}).props;
  expect(text.children).toEqual('button pressed');
});

test('call timeout', () => {
  act(() => jest.runAllTimers());
  const text = tree.root.findByProps({testID: 'timeOutText'}).props;
  expect(text.children).toEqual('timeout is called');
});
