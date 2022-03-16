import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import ItemsEnzyme from '../src/screen/itemEnzyme';

import renderer from 'react-test-renderer';

// This test just uses Jest snapshot testing
it('renders correctly, test using Jest', () => {
  renderer.create(<ItemsEnzyme />);
});

// Using Jest + Enzyme
describe('<ItemsEnzyme />', () => {
  it('renders correctly, test using Jest + Enzyme', () => {
    expect(shallow(<ItemsEnzyme />)).toMatchSnapshot();
  });
});

describe('Check view item', () => {
  test('check view', () => {
    let wrapper = shallow(<ItemsEnzyme />);
    expect(
      wrapper.findWhere(node => node.prop('testID') === 'todo-item'),
    ).toBeTruthy();
  });
});
