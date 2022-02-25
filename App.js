import React from 'react';

import ReduxExample from './src/screen/reduxExample';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

// import {store} from './src/redux/stores/stores';
import {store, persistor} from './src/reduxSaga/stores/stores';
import ReduxExampleSaga from './src/screen/reduxExampleSaga';
import RootNavigator from './src/navigation/rootNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Home from './src/screen/home';


const cache = new InMemoryCache()
const client = new ApolloClient({
  uri: 'https://api.graphql.guide/graphql',
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
})


const App = () => {
  return (
    <ApolloProvider client={client}>
     <Provider store={store}>
      {/* <ReduxExampleSaga></ReduxExampleSaga> */}
      {/* <ReduxExample></ReduxExample> */}
        <RootNavigator></RootNavigator>
      </Provider>
      {/* <Home></Home> */}
    </ApolloProvider>
  );
};

export default App;
