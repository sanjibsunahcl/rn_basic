import React from 'react';

import ReduxExample from './src/screen/reduxExample';
import {Provider} from 'react-redux';
import {store} from './src/redux/stores/stores';

const App = () => {
  return (
    <Provider store={store}>
      <ReduxExample></ReduxExample>
    </Provider>
  );
};

export default App;
