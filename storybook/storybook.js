// if you use expo remove this line

import {getStorybookUI, configure, addDecorator} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';
import {name as appName} from '../app.json';

import './rn-addons';
import {AppRegistry} from 'react-native';

addDecorator(withKnobs);

configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({});

// export default StorybookUIRoot;
// AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
