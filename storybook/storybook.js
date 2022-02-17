// if you use expo remove this line

import {getStorybookUI, configure, addDecorator} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';

import './rn-addons';

addDecorator(withKnobs);

configure(() => {
  require('./stories');
}, module);


const StorybookUIRoot = getStorybookUI({});


export default StorybookUIRoot;