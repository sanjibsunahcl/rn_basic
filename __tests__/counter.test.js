import React from 'react';
import {create, act} from 'react-test-renderer';
import Counter from '../src/screen/Count';

const tree = create(<Counter />);

// jest.runAllTimers();
//Snap shot test
it('Item snapshot', () => {
  expect(tree).toMatchSnapshot();
});

test('function and state test', () => {
  let compData = tree.getInstance();
  //   console.log(data.dataChange(5));
  compData.dataChange(5);
  console.log(compData);
  expect(compData.state.count).toEqual(25);
});
