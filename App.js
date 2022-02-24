import React from 'react';

import ReduxExample from './src/screen/reduxExample';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

// import {store} from './src/redux/stores/stores';
import {store, persistor} from './src/reduxSaga/stores/stores';
import ReduxExampleSaga from './src/screen/reduxExampleSaga';
import RootNavigator from './src/navigation/rootNavigator';


const App = () => {
  return (
    <Provider store={store}>
      {/* <ReduxExampleSaga></ReduxExampleSaga> */}
      {/* <ReduxExample></ReduxExample> */}
      <RootNavigator></RootNavigator>
    </Provider>
  );
};

export default App;
