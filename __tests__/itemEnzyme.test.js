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

  it('should render button', () => {
    const wrapper = shallow(<ItemsEnzyme />);
  });
});
