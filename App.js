import React from 'react';
import ReduxExample from './src/screen/reduxExample';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

// import {store} from './src/redux/stores/stores';
import {store, persistor} from './src/reduxSaga/stores/stores';
import ReduxExampleSaga from './src/screen/reduxExampleSaga';
import RootNavigator from './src/navigation/rootNavigator';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Home from './src/screen/home';

const cache = new InMemoryCache();
// const client = new ApolloClient({
//   uri: 'https://api.graphql.guide/graphql',
//   cache,
//   defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
// });

//hasura graphql
const client = new ApolloClient({
  uri: 'https://hasura.io/learn/graphql',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYW1AbWFpbGluYXRvci5jb20iLCJuYW1lIjoic2FtIiwiaWF0IjoxNjQ2MDI0ODE4LjM1OCwiaXNzIjoiaHR0cHM6Ly9oYXN1cmEuaW8vbGVhcm4vIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6InNhbUBtYWlsaW5hdG9yLmNvbSIsIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1yb2xlIjoidXNlciJ9LCJleHAiOjE2NDYxMTEyMTh9.tm8XXJmOMG4Hf-caOWyF6FSt3_hYcAUoISRF8vljfow',
  },
  cache,
  defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
});

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
