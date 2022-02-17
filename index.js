// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// export {default} from './storybook';

import App from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

const SHOW_STORYBOOK = false;

let RootComponent = App;
if (__DEV__ && SHOW_STORYBOOK) {
  const {StorybookUIRoot} = require('./storybook');
  RootComponent = StorybookUIRoot;
}

AppRegistry.registerComponent(appName, () => RootComponent);
